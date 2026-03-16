const fs = require("fs");

const p = {
  bg_1:       "#14091b",
  bg_2:       "#1e0e26",
  bg_3:       "#341646",
  purple_1:   "#4f2268",
  purple_2:   "#7d2fa3",
  purple_3:   "#a73bde",
  purple_4:   "#d08aff",
  fg_1:       "#cccccc",
  fg_2:       "#cdd3de",
  fg_3:       "#dddddd",
  white:      "#ffffff",
  cursor:     "#ffdd00",
};

const theme = {
  "$schema": "vscode://schemas/color-theme",
  "name": "Material Night Purple",
  "type": "dark",

  "colors": {

    "foreground": p.fg_3,

    "tab.inactiveBackground": p.bg_1,
    "tab.activeBackground": p.bg_3,
    "tab.activeBorder": p.purple_2,
    "tab.border": p.bg_1,
    "tab.activeForeground": p.white,
    "tab.inactiveForeground": p.white + "bb",
    "tab.unfocusedActiveForeground": p.white + "cc",
    "tab.unfocusedInactiveForeground": p.white + "99",

    "editor.background": p.bg_2,
    "editor.foreground": p.fg_2,
    "editor.selectionBackground": p.purple_2,
    "editor.wordHighlightTextBackground": p.purple_2 +"55",
    "editor.lineHighlightBackground": p.bg_3,
    "editorLineNumber.foreground": p.purple_1,
    "editorLineNumber.activeForeground": p.white,
    "editorIndentGuide.background1": p.purple_1,
    "editorIndentGuide.activeBackground1": p.purple_2,
    "editorCursor.foreground": p.cursor,
    "editorWidget.background": p.bg_2,
    "editorGroupHeader.tabsBackground": p.bg_1,
    "editorGroup.border": p.bg_3,
    "editorOverviewRuler.border": p.purple_1 + "80",
    "editorInfo.foreground": p.purple_4,
    "editorLink.activeForeground": p.purple_4,

    "terminal.background": p.bg_1,
    "panel.background": p.bg_1,
    "panel.border": p.bg_3 + "80",
    "panelTitle.activeBorder": p.purple_2,
    "panelTitle.activeForeground": p.white,
    "panelTitle.inactiveForeground": p.white + "b3",

    "positronConsole.background": p.bg_1,
    "positronVariables.foreground": p.fg_1,
    "positronVariables.background": p.bg_1,
    "positronVariables.activeSelectionBackground": p.purple_2,
    "positronActionBar.selectBoxBackground": p.bg_2,
    "positronActionBar.selectBorder": p.bg_3,
    "positronDataExplorer.foreground": p.fg_3,
    "positronDataExplorer.background": p.bg_2,

    "activityBar.background": p.bg_1,
    "activityBar.activeBackground": p.purple_2,
    "activityBar.foreground": p.white,
    "activityBar.inactiveForeground": p.white + "99",
    "activityBarBadge.background": p.purple_2,
    "activityBarBadge.foreground": p.white,

    "sideBar.background": p.bg_1,
    "sideBar.foreground": p.fg_1,
    "sideBarTitle.background": p.bg_2,
    "sideBarSectionHeader.background": p.bg_3,
    "sideBarSectionHeader.foreground": p.fg_3,

    "titleBar.activeBackground": p.purple_2,
    "titleBar.activeForeground": p.white,
    "titleBar.inactiveBackground": p.bg_1,
    "titleBar.inactiveForeground": p.white + "99",

    "statusBar.background": p.purple_2,
    "statusBar.foreground": p.white,
    "statusBar.debuggingBackground": p.purple_3,

    "dropdown.background": p.bg_2,
    "dropdown.foreground": p.fg_3,
    "dropdown.border": p.bg_3,

    "input.background": p.bg_1,
    "input.foreground": p.fg_3,
    "input.placeholderForeground": p.white + "60",
    "input.border": p.bg_3,
    "inputOption.activeBorder": p.purple_2,
    "inputOption.activeBackground": p.purple_2 +"80",
    "inputValidation.infoBorder": p.purple_2,

    "list.activeSelectionBackground": p.purple_2,
    "list.hoverBackground": p.bg_3,
    "list.focusBackground": p.bg_3,
    "list.inactiveSelectionBackground": p.bg_3,
    "list.highlightForeground": p.purple_4,
    "list.focusOutline": p.purple_2,

    "focusBorder": p.purple_2,

    "button.background": p.purple_2,
    "button.foreground": p.white,
    "button.hoverBackground": p.purple_3,

    "progressBar.background": p.purple_2,

    "textLink.foreground": p.purple_4,
    "textLink.activeForeground": p.purple_4,

    "pickerGroup.foreground": p.purple_4,

    "settings.focusedRowBorder": p.purple_2,
    "settings.modifiedItemIndicator": p.purple_3,

    "notifications.border": p.bg_3,
    "notifications.background": p.bg_2,
    "notifications.foreground": p.fg_3,
    "notificationCenterHeader.background": p.bg_3,

    "sash.hoverBorder": p.purple_2,

    "peekView.border": p.purple_2,
    "peekViewTitle.background": p.bg_3,
    "peekViewResult.background": p.bg_1,
    "peekViewEditor.background": p.bg_2,

    "badge.background": p.purple_2,
    "badge.foreground": p.white,

    "menu.background": p.bg_2,
    "menu.foreground": p.fg_3,
    "menu.selectionBackground": p.purple_2,
    "menu.selectionForeground": p.white,
    "menu.separatorBackground": p.bg_3,

    "commandCenter.background": p.bg_1,
    "commandCenter.foreground": p.fg_3,
    "commandCenter.border": p.bg_3 + "80",

    "checkbox.background": p.bg_1,
    "checkbox.border": p.purple_1,

    "scrollbarSlider.background": p.purple_1 + "66",
    "scrollbarSlider.hoverBackground": p.purple_2 +"b3",
    "scrollbarSlider.activeBackground": p.purple_3 + "b3",

    "breadcrumb.foreground": p.white + "b3",
    "breadcrumb.focusForeground": p.fg_3,
    "breadcrumb.activeSelectionForeground": p.white,

    "descriptionForeground": p.white + "b3",
    "icon.foreground": p.fg_1,

    "keybindingLabel.background": p.bg_3 + "2b",
    "keybindingLabel.foreground": p.fg_3,
    "keybindingLabel.border": p.purple_1 + "99",

    "editorRuler.foreground": p.purple_1,
  },

  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": { "foreground": p.purple_3 }
    },
  ],
};

fs.writeFileSync(
  "themes/material-night-purple.json",
  JSON.stringify(theme, null, 2) + "\n"
);

console.log("Theme built successfully.");
