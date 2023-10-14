# Swap-Word VSCode extension 

Quickly swap places two words or selections in VSCode editor.

## Demo

![](https://media.giphy.com/media/l0Ex58VceFI8WeLn2/source.gif)

## Instructions

Put two anchors or select two text ranges to quickly swap them places.

## Commands

`Swap word` to initialize snippet.

## Example keybinding setup
```json
{
    "key": "shift+alt+s",
    "command": "extension.swapWord",
    "when": "editorTextFocus"
}
```

It is also possible to use `editorTextFocus && editorHasMultipleSelections` as the condition to avoid displaying the error notification.

## TODO

1. Add default keyboard snippet.


**Enjoy!**
