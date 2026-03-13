const fs = require("fs");

const p = {
  bg_deep:       "#14091b",
  bg:            "#1e0e26",
  bg_light:      "#341646",
  purple_muted:  "#4f2268",
  purple:        "#7d2fa3",
  purple_bright: "#a73bde",
  purple_light:  "#d08aff",
  lavender:      "#c792ea",

  white:         "#ffffff",
  gray_light:    "#ddd",
  gray:          "#ccc",
  text:          "#CDD3DE",
  near_black:    "#020e14",

  cursor:        "#FFCC00",

  red_light:     "#ff7869",
  salmon:        "#F77669",
  red_pink:      "#ff5370",
  red_dark:      "#d3423e",
  red_coral:     "#EC5F67",

  orange:        "#ffbc6a",
  gold:          "#ffcb6b",
  yellow_bright: "#FAD430",
  yellow_green:  "#f1e655",
  yellow_pale:   "#FFEB95",
  yellow_git:    "#FFCF1B",

  green:         "#c5ff93",
  green_soft:    "#C3E88D",
  green_pale:    "#d9f5dd",

  cyan:          "#a2fff6",
  teal:          "#80CBC4",
  blue:          "#90e1ff",
  blue_muted:    "#78ccf0",
};

const theme = {
  "$schema": "vscode://schemas/color-theme",
  "name": "Material Night Purple",
  "type": "dark",

  "colors": {

    "foreground": p.gray_light,

    "tab.inactiveBackground": p.bg_deep,
    "tab.activeBackground": p.bg_light,
    "tab.activeBorder": p.purple,
    "tab.border": p.bg_deep,
    "tab.activeForeground": p.white,
    "tab.inactiveForeground": p.white + "bb",
    "tab.unfocusedActiveForeground": p.white + "cc",
    "tab.unfocusedInactiveForeground": p.white + "99",

    "editor.background": p.bg,
    "editor.foreground": p.text,
    "editor.selectionBackground": p.purple,
    "editor.wordHighlightTextBackground": p.purple + "55",
    "editor.lineHighlightBackground": p.bg_light,
    "editorLineNumber.foreground": p.purple_muted,
    "editorLineNumber.activeForeground": p.white,
    "editorIndentGuide.background1": p.purple_muted,
    "editorIndentGuide.activeBackground1": p.purple,
    "editorCursor.foreground": p.cursor,
    "editorWidget.background": p.bg,
    "editorGroupHeader.tabsBackground": p.bg_deep,
    "editorGroup.border": p.bg_light,
    "editorOverviewRuler.border": p.purple_muted + "80",
    "editorInfo.foreground": p.purple_light,
    "editorLink.activeForeground": p.purple_light,

    "terminal.background": p.bg_deep,
    "panel.background": p.bg_deep,
    "panel.border": p.bg_light + "80",
    "panelTitle.activeBorder": p.purple,
    "panelTitle.activeForeground": p.white,
    "panelTitle.inactiveForeground": p.white + "b3",

    "positronConsole.background": p.bg_deep,
    "positronVariables.foreground": p.gray,
    "positronVariables.background": p.bg_deep,
    "positronVariables.activeSelectionBackground": p.purple,
    "positronActionBar.selectBoxBackground": p.bg,
    "positronActionBar.selectBorder": p.bg_light,
    "positronDataExplorer.foreground": p.gray_light,
    "positronDataExplorer.background": p.bg,

    "activityBar.background": p.bg_deep,
    "activityBar.activeBackground": p.purple,
    "activityBar.foreground": p.white,
    "activityBar.inactiveForeground": p.white + "99",
    "activityBarBadge.background": p.purple,
    "activityBarBadge.foreground": p.white,

    "sideBar.background": p.bg_deep,
    "sideBar.foreground": p.gray,
    "sideBarTitle.background": p.bg,
    "sideBarSectionHeader.background": p.bg_light,
    "sideBarSectionHeader.foreground": p.gray_light,

    "titleBar.activeBackground": p.purple,
    "titleBar.activeForeground": p.white,
    "titleBar.inactiveBackground": p.bg_deep,
    "titleBar.inactiveForeground": p.white + "99",

    "statusBar.background": p.purple,
    "statusBar.foreground": p.white,
    "statusBar.debuggingBackground": p.purple_bright,

    "dropdown.background": p.bg,
    "dropdown.foreground": p.gray_light,
    "dropdown.border": p.bg_light,

    "input.background": p.bg_deep,
    "input.foreground": p.gray_light,
    "input.placeholderForeground": p.white + "60",
    "input.border": p.bg_light,
    "inputOption.activeBorder": p.purple,
    "inputOption.activeBackground": p.purple + "80",
    "inputValidation.infoBorder": p.purple,

    "list.activeSelectionBackground": p.purple,
    "list.hoverBackground": p.bg_light,
    "list.focusBackground": p.bg_light,
    "list.inactiveSelectionBackground": p.bg_light,
    "list.highlightForeground": p.purple_light,
    "list.focusOutline": p.purple,

    "focusBorder": p.purple,

    "button.background": p.purple,
    "button.foreground": p.white,
    "button.hoverBackground": p.purple_bright,

    "progressBar.background": p.purple,

    "textLink.foreground": p.purple_light,
    "textLink.activeForeground": p.purple_light,

    "pickerGroup.foreground": p.purple_light,

    "settings.focusedRowBorder": p.purple,
    "settings.modifiedItemIndicator": p.purple_bright,

    "notifications.border": p.bg_light,
    "notifications.background": p.bg,
    "notifications.foreground": p.gray_light,
    "notificationCenterHeader.background": p.bg_light,

    "sash.hoverBorder": p.purple,

    "peekView.border": p.purple,
    "peekViewTitle.background": p.bg_light,
    "peekViewResult.background": p.bg_deep,
    "peekViewEditor.background": p.bg,

    "badge.background": p.purple,
    "badge.foreground": p.white,

    "menu.background": p.bg,
    "menu.foreground": p.gray_light,
    "menu.selectionBackground": p.purple,
    "menu.selectionForeground": p.white,
    "menu.separatorBackground": p.bg_light,

    "commandCenter.background": p.bg_deep,
    "commandCenter.foreground": p.gray_light,
    "commandCenter.border": p.bg_light + "80",

    "checkbox.background": p.bg_deep,
    "checkbox.border": p.purple_muted,

    "scrollbarSlider.background": p.purple_muted + "66",
    "scrollbarSlider.hoverBackground": p.purple + "b3",
    "scrollbarSlider.activeBackground": p.purple_bright + "b3",

    "breadcrumb.foreground": p.white + "b3",
    "breadcrumb.focusForeground": p.gray_light,
    "breadcrumb.activeSelectionForeground": p.white,

    "descriptionForeground": p.white + "b3",
    "icon.foreground": p.gray,

    "keybindingLabel.background": p.bg_light + "2b",
    "keybindingLabel.foreground": p.gray_light,
    "keybindingLabel.border": p.purple_muted + "99",
  },

  "tokenColors": [
    {
      "name": "Text and Source Base",
      "scope": ["text", "source"],
      "settings": { "foreground": p.text }
    },
    {
      "name": "Variable",
      "scope": ["variable", "variable.parameter", "source.python", "source.python meta.function-call.arguments.python"],
      "settings": { "foreground": p.white }
    },
    {
      "name": "Constant Numeric",
      "scope": ["constant.numeric"],
      "settings": { "foreground": p.red_light }
    },
    {
      "name": "Constant Language",
      "scope": ["constant.language"],
      "settings": { "foreground": p.orange, "fontStyle": "bold" }
    },
    {
      "name": "Constant Other",
      "scope": ["constant"],
      "settings": { "foreground": p.salmon }
    },
    {
      "name": "String",
      "scope": ["string", "constant.other.symbol", "entity.other.inherited-class"],
      "settings": { "foreground": p.green }
    },
    {
      "name": "Punctuation Separator / Operator",
      "scope": ["punctuation.separator.arguments.python", "punctuation.separator.element.python", "punctuation.separator.period.python", "keyword.operator"],
      "settings": { "foreground": p.cyan, "fontStyle": "" }
    },
    {
      "name": "Keyword",
      "scope": ["keyword"],
      "settings": { "foreground": p.purple_light, "fontStyle": "bold" }
    },
    {
      "name": "Storage",
      "scope": ["storage"],
      "settings": { "foreground": p.purple_light }
    },
    {
      "name": "Function",
      "scope": ["entity.name.function", "meta.function-call support.type", "meta.function-call support.function", "meta.function-call.generic", "support.function", "keyword.other.special-method", "variable.function"],
      "settings": { "foreground": p.blue }
    },
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": { "foreground": p.purple_bright }
    },
    {
      "name": "Punctuation Definition",
      "scope": ["punctuation.definition.string", "punctuation.definition.variable", "punctuation.definition.parameters", "punctuation.definition.array"],
      "settings": { "foreground": p.green_pale }
    },
    {
      "name": "Class",
      "scope": ["support.class", "entity.name.class", "entity.name.type.class", "variable.language.this.js"],
      "settings": { "foreground": p.gold }
    },
    {
      "name": "Meta Class",
      "scope": ["meta.class"],
      "settings": { "foreground": p.white }
    },
    {
      "name": "Support (tags, misc)",
      "scope": ["constant.other.color", "meta.tag", "punctuation.definition.tag", "punctuation.separator.inheritance.php", "punctuation.definition.tag.html", "punctuation.definition.tag.begin.html", "punctuation.definition.tag.end.html"],
      "settings": { "foreground": p.teal }
    },
    {
      "name": "Tag Name",
      "scope": ["entity.name.tag"],
      "settings": { "foreground": p.red_pink }
    },
    {
      "name": "Attribute",
      "scope": ["entity.other.attribute-name"],
      "settings": { "foreground": p.gold }
    },
    {
      "name": "Attribute ID",
      "scope": ["entity.other.attribute-name.id"],
      "settings": { "foreground": p.yellow_bright }
    },
    {
      "name": "Heading",
      "scope": ["markup.heading punctuation.definition.heading", "entity.name.section"],
      "settings": { "foreground": p.blue_muted, "fontStyle": "" }
    },
    {
      "name": "Bold",
      "scope": ["markup.bold", "punctuation.definition.bold"],
      "settings": { "foreground": p.gold, "fontStyle": "bold" }
    },
    {
      "name": "Italic",
      "scope": ["markup.italic", "punctuation.definition.italic"],
      "settings": { "foreground": p.lavender, "fontStyle": "italic" }
    },
    {
      "name": "Markup Fenced Code / Quarto Raw",
      "scope": ["markup.fenced_code.block.markdown", "markup.inline.raw.string.quarto"],
      "settings": { "foreground": p.green }
    },
    {
      "name": "Quarto Bold/Italic (no style override)",
      "scope": ["markup.bold.quarto", "markup.italic.quarto"],
      "settings": { "fontStyle": "" }
    },
    {
      "name": "Quarto Shortcode Import",
      "scope": ["keyword.control.import.shortcode"],
      "settings": { "foreground": p.white }
    },
    {
      "name": "Quarto Div Heading",
      "scope": ["markup.heading.div.quarto"],
      "settings": { "foreground": p.purple_light, "fontStyle": "bold" }
    },
    {
      "name": "Markup List",
      "scope": ["markup.list"],
      "settings": { "foreground": p.text }
    },
    {
      "name": "SQL Database/Table Names",
      "scope": ["constant.other.database-name.sql", "constant.other.table-name.sql"],
      "settings": { "foreground": p.blue }
    },
    {
      "name": "Inline Code",
      "scope": ["markup.raw.inline"],
      "settings": { "foreground": p.yellow_green }
    },
    {
      "name": "Link Text",
      "scope": ["string.other.link", "punctuation.definition.string.end.markdown"],
      "settings": { "foreground": p.red_pink }
    },
    {
      "name": "Link URL",
      "scope": ["meta.link"],
      "settings": { "foreground": p.salmon }
    },
    {
      "name": "Markup Quote",
      "scope": ["markup.quote"],
      "settings": { "foreground": p.salmon }
    },
    {
      "name": "Separator",
      "scope": ["meta.separator"],
      "settings": { "foreground": p.green_pale }
    },
    {
      "name": "Markup Inserted",
      "scope": ["markup.inserted"],
      "settings": { "foreground": p.yellow_green }
    },
    {
      "name": "Markup Deleted",
      "scope": ["markup.deleted"],
      "settings": { "foreground": p.red_pink }
    },
    {
      "name": "Markup Changed",
      "scope": ["markup.changed"],
      "settings": { "foreground": p.lavender }
    },
    {
      "name": "Regular Expression",
      "scope": ["string.regexp"],
      "settings": { "foreground": p.teal }
    },
    {
      "name": "Escape Character",
      "scope": ["constant.character.escape"],
      "settings": { "foreground": p.salmon }
    },
    {
      "name": "Embedded",
      "scope": ["punctuation.section.embedded", "variable.interpolation"],
      "settings": { "foreground": p.red_dark }
    },
    {
      "name": "Invalid Illegal",
      "scope": ["invalid.illegal"],
      "settings": { "foreground": p.white }
    },
    {
      "name": "Invalid Broken",
      "scope": ["invalid.broken"],
      "settings": { "foreground": p.near_black }
    },
    {
      "name": "Invalid Deprecated",
      "scope": ["invalid.deprecated"],
      "settings": { "foreground": p.white }
    },
    {
      "name": "CSS Property Name",
      "scope": ["support.type.property-name", "meta.property-list meta.property-name"],
      "settings": { "foreground": p.teal }
    },
    {
      "name": "CSS Units",
      "scope": ["keyword.other.unit", "source.css keyword.other.unit", "source.less keyword.other.unit", "source.scss keyword.other.unit"],
      "settings": { "foreground": p.yellow_pale }
    },
    {
      "name": "CSS Color Hash",
      "scope": ["constant.other.color.rgb-value punctuation.definition.constant"],
      "settings": { "foreground": p.salmon }
    },
    {
      "name": "CSS Colors Named",
      "scope": ["constant.other.color", "meta.property-value support.constant.named-color.css"],
      "settings": { "foreground": p.yellow_pale }
    },
    {
      "name": "Selector",
      "scope": ["meta.selector"],
      "settings": { "foreground": p.lavender }
    },
    {
      "name": "Git Gutter Deleted",
      "scope": ["markup.deleted.git_gutter"],
      "settings": { "foreground": p.red_coral }
    },
    {
      "name": "Git Gutter Changed",
      "scope": ["markup.changed.git_gutter"],
      "settings": { "foreground": p.yellow_git }
    },
    {
      "name": "Git Gutter Inserted",
      "scope": ["markup.inserted.git_gutter"],
      "settings": { "foreground": p.green_soft }
    },
    {
      "name": "Find in Files Path",
      "scope": ["text.find-in-files entity.name.filename.find-in-files"],
      "settings": { "foreground": p.yellow_pale }
    }
  ]
};

fs.writeFileSync(
  "themes/material-night-purple.json",
  JSON.stringify(theme, null, 2) + "\n"
);

console.log("Theme built successfully.");
