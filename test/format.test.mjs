import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { resolveAll } from '../scripts/palette.mjs';
import { keys, hexColors, assertContrast } from './helpers.mjs';
const fixture = JSON.parse(await readFile(new URL('./fixtures/upstream.json', import.meta.url)));
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

for (const f of resolveAll()) test(f.name + ': native color-link grammar and supported highlight groups', async () => {
  const source = await read('themes/' + f.slug + '.micro');
  const entries = source.trim().split('\n').map(line => {
    const match = line.match(/^color-link ([\w.-]+) "((?:(?:bold|italic|underline) )*(?:#[a-f0-9]{6})?(?:,#[a-f0-9]{6})?)"$/);
    assert.ok(match, 'Invalid color-link: ' + line); assert.ok(fixture.groups.includes(match[1]), 'Unknown micro group: ' + match[1]);
    return [match[1], match[2]];
  });
  const t = Object.fromEntries(entries); assert.equal(Object.keys(t).length, entries.length);
  assert.equal(t.default, f.r('fg') + ',' + f.r('bg'));
  assert.equal(t['constant.number'], f.r('number')); assert.equal(t['constant.string'], f.r('string'));
  assert.equal(t['constant.bool'], f.r('constant')); assert.equal(t['identifier.var'], f.r('variable'));
  assert.equal(t.statement, f.r('keyword')); assert.equal(t['symbol.operator'], f.r('operator'));
  assert.equal(t.comment, 'italic ' + f.r('comment'));
  const [fg, bg] = t.selection.split(','); assertContrast(fg, bg);
  const [searchFg, searchBg] = t.hlsearch.split(','); assertContrast(searchFg, searchBg);
});
