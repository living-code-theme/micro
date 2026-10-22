import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
test("native plugin archive registers every scheme and matches the prepared registry version", async () => {
  execFileSync(process.execPath, ["scripts/package.mjs"], { cwd: root, stdio: "pipe" });
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
  const [entry] = JSON.parse(await readFile(new URL("../dist/repo.json", import.meta.url)));
  assert.equal(entry.Name, "livingcode"); assert.equal(entry.Versions[0].Version, pkg.version);
  const contents = JSON.parse(execFileSync("python3", ["-c", "import zipfile,json,sys; z=zipfile.ZipFile(sys.argv[1]); assert z.testzip() is None; print(json.dumps({n:z.read(n).decode() for n in z.namelist()}))", `dist/living-code-micro-${pkg.version}.zip`], { cwd: root, encoding: "utf8" }));
  assert.deepEqual(Object.keys(contents).sort(), ["LICENSE", "README.md", "living-code.lua", "repo.json", ...["night", "frost", "paper", "signal"].map(f => `themes/living-code-${f}.micro`)].sort());
  assert.match(contents["living-code.lua"], new RegExp(`VERSION = "${pkg.version.replaceAll(".", "\\.")}"`));
  for (const flavor of ["night", "frost", "paper", "signal"]) assert.ok(contents["living-code.lua"].includes(`config.AddRuntimeFile("livingcode", config.RTColorscheme, "themes/living-code-${flavor}.micro")`));
  assert.doesNotMatch(contents["living-code.lua"], /SetGlobalOption|os\.execute/);
});
test("CI uploads plugin assets and the tag release hosts the channel's ZIP without recapturing", async () => {
  const check = await readFile(new URL("../.github/workflows/check.yml", import.meta.url), "utf8");
  const release = await readFile(new URL("../.github/workflows/release.yml", import.meta.url), "utf8");
  assert.ok(check.includes("dist/*.zip") && check.includes("dist/repo.json"));
  assert.ok(release.includes('tags: ["v*"]'));
  assert.ok(release.includes('test "$GITHUB_REF_NAME" = "v$version"'));
  assert.ok(release.includes("--verify-tag --generate-notes dist/*.zip dist/repo.json"));
  assert.doesNotMatch(release, /pnpm screenshots|git tag|push origin/);
});
