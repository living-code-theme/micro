<!-- living-code-readme:1 -->
# 🔬 Living Code for micro

**Calm slate. Living color.** Living Code for micro: native color-link schemes for syntax groups, editor chrome, selections, diagnostics and search matches.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
git clone https://github.com/living-code-theme/micro.git
cd micro
```

```sh
mkdir -p "${XDG_CONFIG_HOME:-$HOME/.config}/micro/colorschemes"
cp themes/*.micro "${XDG_CONFIG_HOME:-$HOME/.config}/micro/colorschemes/"
```

Open micro, press **Ctrl+E**, and run `set colorscheme living-code-night`. If your terminal’s truecolor support is not detected, also run `set truecolor on`.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

Press **Ctrl+E** and run `set colorscheme living-code-night`.

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

Press **Ctrl+E** and run `set colorscheme living-code-frost`.

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

Press **Ctrl+E** and run `set colorscheme living-code-paper`.

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

Press **Ctrl+E** and run `set colorscheme living-code-signal`.

</details>

## Configuration

The `.micro` files contain only native `color-link` directives. Default body colors, selected text, status lines, tabs, cursor line, search and trailing whitespace are explicitly configured. Built-in syntax subgroups preserve string/number/boolean and operator distinctions. `identifier.class` is used by some micro grammars for functions as well as classes, so it follows the function role.

## Compatibility

For micro’s documented color-link format, with truecolor enabled for exact hex colors. In reduced-color terminals micro approximates the palette. Highlight precision depends on the filetype’s built-in syntax rules: the colorscheme does not install new grammars. Tests validate directive grammar, native group names and semantic colors.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/micro/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
