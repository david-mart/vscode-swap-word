'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.swapWord', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No open text editor');
            return; // No open text editor
        }

        let selections = editor.selections;

        if (selections.length === 2) {

            let firstRange = selections[0];
                    
            let firstSelection = editor.document.getText(firstRange);

            if (!firstSelection.length) {
                firstRange  = <vscode.Selection> editor.document.getWordRangeAtPosition(firstRange.start);
                firstSelection = editor.document.getText(firstRange)
            }

            let secondRange = selections[1];
            let secondSelection = editor.document.getText(secondRange);
            
            if (!secondSelection.length) {
                secondRange  = <vscode.Selection> editor.document.getWordRangeAtPosition(secondRange.start);
                secondSelection = editor.document.getText(firstRange)
            }
            
            editor.edit(builder => {
                builder.replace(firstRange, secondSelection);
                builder.replace(secondRange, firstSelection);
            })

        } else {
            vscode.window.showErrorMessage('Please make two selections');
        }

        // Display a message box to the user
        // vscode.window.showInformationMessage('Selected characters: ' + text.length);
    });



    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}