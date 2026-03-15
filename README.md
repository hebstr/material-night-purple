# Material Night Purple

A dark purple theme for VSCode and Positron, inspired by [Material Night Eighties](https://open-vsx.org/extension/ms-vscode/Theme-MaterialKit).

![Material Night Purple screenshot](screenshots/preview.png)

## Installation

### From Open VSX (Positron / VSCode)

Search for **Material Night Purple** in the Extensions panel, or install from the command line:

```bash
code --install-extension hebstr.material-night-purple
```

### From source

```bash
git clone https://codeberg.org/hebstr/material-night-purple.git
cd material-night-purple
npx @vscode/vsce package
code --install-extension material-night-purple-*.vsix
```

## Palette

| Role             | Color                                                        |
| ---------------- | ------------------------------------------------------------ |
| Background       | ![#1e0e26](https://placehold.co/12x12/1e0e26/1e0e26) `#1e0e26` |
| Deep background  | ![#14091b](https://placehold.co/12x12/14091b/14091b) `#14091b` |
| Purple accent    | ![#7d2fa3](https://placehold.co/12x12/7d2fa3/7d2fa3) `#7d2fa3` |
| Keywords         | ![#c792ea](https://placehold.co/12x12/c792ea/c792ea) `#c792ea` |
| Strings          | ![#c3e88d](https://placehold.co/12x12/c3e88d/c3e88d) `#c3e88d` |
| Functions        | ![#82aaff](https://placehold.co/12x12/82aaff/82aaff) `#82aaff` |
| Numbers          | ![#F78C6C](https://placehold.co/12x12/F78C6C/F78C6C) `#F78C6C` |
| Comments         | ![#697098](https://placehold.co/12x12/697098/697098) `#697098` |

## Customization

The theme is generated from `build.js`, where colors are defined as a palette. To tweak the theme:

1. Edit the palette or token rules in `build.js`
2. Run `node build.js`
3. Reload the window

## License

[MIT](LICENSE.md)
