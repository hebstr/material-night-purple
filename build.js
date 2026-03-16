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
    "descriptionForeground": p.white + "b3",
    "icon.foreground": p.fg_1,
    "focusBorder": p.purple_2,
    "sash.hoverBorder": p.purple_2,
    "selection.background": p.purple_2 + "88",

    "editor.background": p.bg_2,
    "editor.foreground": p.fg_2,
    "editor.selectionBackground": p.purple_2,
    "editor.wordHighlightTextBackground": p.purple_2 + "55",
    "editor.lineHighlightBackground": p.bg_3,
    "editor.findMatchBackground": p.purple_2 + "66",
    "editor.findMatchHighlightBackground": p.purple_1 + "66",
    "editor.snippetTabstopHighlightBackground": p.purple_1 + "55",
    "editor.foldBackground": p.bg_3 + "33",
    "editorCursor.foreground": p.cursor,
    "editorLineNumber.foreground": p.purple_1,
    "editorLineNumber.activeForeground": p.white,
    "editorIndentGuide.background1": p.purple_1,
    "editorIndentGuide.activeBackground1": p.purple_2,
    "editorRuler.foreground": p.purple_1,
    "editorInfo.foreground": p.purple_4,
    "editorLink.activeForeground": p.purple_4,
    "editorBracketMatch.background": p.purple_1 + "66",
    "editorBracketMatch.border": p.purple_2,
    "editorGroup.border": p.bg_3,
    "editorGroupHeader.tabsBackground": p.bg_1,
    "editorPane.background": p.bg_2,

    "editorWidget.background": p.bg_2,
    "editorWidget.foreground": p.fg_3,
    "editorWidget.border": p.bg_3,
    "editorSuggestWidget.background": p.bg_2,
    "editorSuggestWidget.foreground": p.fg_3,
    "editorSuggestWidget.border": p.bg_3,
    "editorSuggestWidget.selectedBackground": p.bg_3,
    "editorSuggestWidget.highlightForeground": p.purple_4,
    "editorHoverWidget.background": p.bg_2,
    "editorHoverWidget.foreground": p.fg_3,
    "editorHoverWidget.border": p.bg_3,

    "editorOverviewRuler.border": p.purple_1 + "80",
    "editorOverviewRuler.findMatchForeground": p.purple_4 + "99",

    "minimap.background": p.bg_2,
    "minimapSlider.background": p.purple_1 + "44",
    "minimapSlider.activeBackground": p.purple_2 + "66",
    "minimapSlider.hoverBackground": p.purple_2 + "44",

    "tab.inactiveBackground": p.bg_1,
    "tab.activeBackground": p.bg_3,
    "tab.activeBorder": p.purple_2,
    "tab.border": p.bg_1,
    "tab.activeForeground": p.white,
    "tab.inactiveForeground": p.white + "bb",
    "tab.unfocusedActiveForeground": p.white + "cc",
    "tab.unfocusedInactiveForeground": p.white + "99",

    "titleBar.activeBackground": p.purple_2,
    "titleBar.activeForeground": p.white,
    "titleBar.inactiveBackground": p.bg_1,
    "titleBar.inactiveForeground": p.white + "99",

    "activityBar.background": p.bg_1,
    "activityBar.activeBackground": p.purple_2,
    "activityBar.foreground": p.white,
    "activityBar.inactiveForeground": p.white + "99",
    "activityBarBadge.background": p.purple_2,
    "activityBarBadge.foreground": p.white,

    "sideBar.background": p.bg_1,
    "sideBar.foreground": p.fg_1,
    "sideBar.border": p.bg_3 + "80",
    "sideBarTitle.background": p.bg_2,
    "sideBarSectionHeader.background": p.bg_3,
    "sideBarSectionHeader.foreground": p.fg_3,
    "tree.indentGuidesStroke": p.purple_1,

    "statusBar.background": p.purple_2,
    "statusBar.foreground": p.white,
    "statusBar.debuggingBackground": p.purple_3,
    "statusBar.noFolderBackground": p.bg_1,
    "statusBarItem.hoverBackground": p.purple_3,
    "statusBarItem.prominentBackground": p.purple_3,
    "statusBarItem.remoteBackground": p.purple_2,
    "statusBarItem.remoteForeground": p.white,

    "panel.background": p.bg_1,
    "panel.border": p.bg_3 + "80",
    "panelTitle.activeBorder": p.purple_2,
    "panelTitle.activeForeground": p.white,
    "panelTitle.inactiveForeground": p.white + "b3",
    "panelInput.border": p.bg_3,
    "panelSection.border": p.bg_3 + "80",

    "terminal.background": p.bg_1,
    "terminal.foreground": p.fg_3,
    "terminalCursor.foreground": p.cursor,
    "terminalCursor.background": p.bg_2,

    "list.activeSelectionBackground": p.purple_2,
    "list.hoverBackground": p.bg_3,
    "list.focusBackground": p.bg_3,
    "list.inactiveSelectionBackground": p.bg_3,
    "list.highlightForeground": p.purple_4,
    "list.focusOutline": p.purple_2,

    "input.background": p.bg_1,
    "input.foreground": p.fg_3,
    "input.placeholderForeground": p.white + "60",
    "input.border": p.bg_3,
    "inputOption.activeBorder": p.purple_2,
    "inputOption.activeBackground": p.purple_2 + "80",
    "inputValidation.infoBorder": p.purple_2,

    "dropdown.background": p.bg_2,
    "dropdown.foreground": p.fg_3,
    "dropdown.border": p.bg_3,

    "button.background": p.purple_2,
    "button.foreground": p.white,
    "button.hoverBackground": p.purple_3,
    "button.secondaryBackground": p.bg_3,
    "button.secondaryForeground": p.fg_3,
    "button.secondaryHoverBackground": p.purple_1,
    "button.border": p.purple_1 + "80",

    "checkbox.background": p.bg_1,
    "checkbox.border": p.purple_1,

    "badge.background": p.purple_2,
    "badge.foreground": p.white,
    "progressBar.background": p.purple_2,

    "quickInput.background": p.bg_1,
    "quickInput.foreground": p.fg_3,
    "quickInputList.focusBackground": p.bg_3,
    "quickInputTitle.background": p.bg_3,

    "commandCenter.background": p.bg_1,
    "commandCenter.foreground": p.fg_3,
    "commandCenter.border": p.bg_3 + "80",

    "menu.background": p.bg_2,
    "menu.foreground": p.fg_3,
    "menu.selectionBackground": p.purple_2,
    "menu.selectionForeground": p.white,
    "menu.separatorBackground": p.bg_3,

    "notifications.border": p.bg_3,
    "notifications.background": p.bg_2,
    "notifications.foreground": p.fg_3,
    "notificationCenterHeader.background": p.bg_3,

    "banner.background": p.bg_3,

    "scrollbarSlider.background": p.purple_1 + "66",
    "scrollbarSlider.hoverBackground": p.purple_2 + "b3",
    "scrollbarSlider.activeBackground": p.purple_3 + "b3",

    "breadcrumb.foreground": p.white + "b3",
    "breadcrumb.focusForeground": p.fg_3,
    "breadcrumb.activeSelectionForeground": p.white,

    "peekView.border": p.purple_2,
    "peekViewTitle.background": p.bg_3,
    "peekViewResult.background": p.bg_1,
    "peekViewEditor.background": p.bg_2,

    "pickerGroup.foreground": p.purple_4,

    "textLink.foreground": p.purple_4,
    "textLink.activeForeground": p.purple_4,
    "textBlockQuote.background": p.bg_3,
    "textBlockQuote.border": p.purple_2 + "80",
    "textCodeBlock.background": p.bg_1,
    "textPreformat.background": p.bg_1 + "66",
    "textSeparator.foreground": p.purple_1,

    "settings.focusedRowBorder": p.purple_2,
    "settings.modifiedItemIndicator": p.purple_3,
    "settings.headerForeground": p.fg_3,
    "settings.rowHoverBackground": p.bg_3 + "33",

    "keybindingLabel.background": p.bg_3 + "40",
    "keybindingLabel.foreground": p.fg_3,
    "keybindingLabel.border": p.purple_1 + "99",
    "keybindingLabel.bottomBorder": p.purple_1 + "99",
    "keybindingTable.headerBackground": p.bg_3,
    "keybindingTable.rowsBackground": p.bg_1,

    "debugToolBar.background": p.bg_2,
    "debugExceptionWidget.background": p.bg_2,
    "debugConsole.infoForeground": p.purple_4,

    "extensionButton.prominentBackground": p.purple_2,
    "extensionButton.prominentForeground": p.white,
    "extensionButton.prominentHoverBackground": p.purple_3,
    "extensionButton.background": p.bg_3,
    "extensionButton.foreground": p.fg_3,
    "extensionButton.hoverBackground": p.purple_1,
    "extensionButton.separator": p.purple_1,
    "extensionBadge.remoteBackground": p.purple_2,
    "extensionBadge.remoteForeground": p.white,

    "welcomePage.background": p.bg_1,
    "welcomePage.tileBackground": p.bg_2,
    "welcomePage.tileHoverBackground": p.bg_3,
    "welcomePage.tileBorder": p.bg_3 + "80",
    "welcomePage.progress.background": p.bg_1,
    "welcomePage.progress.foreground": p.purple_4,
    "walkThrough.embeddedEditorBackground": p.bg_2,

    "positronTopActionBar.background": p.bg_1,
    "positronSideActionBar.background": p.bg_1,
    "positronPlots.background": p.bg_2,
    "positronModalDialog.background": p.bg_2,
    "positronModalDialog.border": p.bg_3,
    "positronConsole.background": p.bg_1,
    "positronVariables.foreground": p.fg_1,
    "positronVariables.background": p.bg_1,
    "positronVariables.activeSelectionBackground": p.purple_2,
    "positronActionBar.selectBoxBackground": p.bg_2,
    "positronActionBar.selectBorder": p.bg_3,
    "positronDataExplorer.foreground": p.fg_3,
    "positronDataExplorer.background": p.bg_2,
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
