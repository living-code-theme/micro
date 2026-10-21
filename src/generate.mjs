// micro color-link groups and built-in syntax subgroups; hex colors require truecolor for best fidelity.
const roles = { comment: 'comment', 'comment.bright': 'comment', identifier: 'variable', 'identifier.var': 'variable',
  'identifier.class': 'function', 'identifier.macro': 'decorator', constant: 'constant', 'constant.bool': 'constant',
  'constant.number': 'number', 'constant.specialChar': 'escape', 'constant.string': 'string', 'constant.string.url': 'link',
  statement: 'keyword', symbol: 'punctuation', 'symbol.brackets': 'punctuation', 'symbol.operator': 'operator', 'symbol.tag': 'tag',
  preproc: 'decorator', 'preproc.shebang': 'comment', type: 'type', 'type.keyword': 'keyword', special: 'decorator',
  underlined: 'link', error: 'error', todo: 'warning', 'line-number': 'lineNumber', 'current-line-number': 'lineNumberActive',
  'gutter-info': 'info', 'gutter-error': 'error', 'gutter-warning': 'warning', 'diff-added': 'added', 'diff-modified': 'modified',
  'diff-deleted': 'removed', 'indent-char': 'border', divider: 'border', scrollbar: 'fgSubtle', message: 'fgMuted', 'error-message': 'error', ignore: 'fgSubtle' };
export function generate(flavors) {
  return flavors.map(f => {
    const links = { default: `${f.r('fg')},${f.r('bg')}`, ...Object.fromEntries(Object.entries(roles).map(([key, role]) => [key, `${f.styles[role] ? f.styles[role] + ' ' : ''}${f.r(role)}`])),
      selection: `${f.r('fg')},${f.r('selection')}`, statusline: `${f.r('bg')},${f.r('accent')}`,
      'statusline.inactive': `${f.r('fgMuted')},${f.r('bgAlt')}`, 'statusline.suggestions': `${f.r('fg')},${f.r('bgAlt')}`,
      tabbar: `${f.r('fgMuted')},${f.r('bgDeep')}`, 'tabbar.active': `${f.r('accent')},${f.r('bg')}`,
      'cursor-line': `,${f.r('lineHighlight')}`, 'color-column': `,${f.r('lineHighlight')}`, 'match-brace': `bold ${f.r('accent')}`,
      hlsearch: `${f.r('bg')},${f.r('match')}`, 'tab-error': `,${f.mix('bg', 'error', 0.15)}`, trailingws: `,${f.mix('bg', 'error', 0.15)}` };
    return { path: `themes/${f.slug}.micro`, content: Object.entries(links).map(([group, color]) => `color-link ${group} "${color}"`).join('\n') + '\n' };
  });
}
