
import * as vscode from 'vscode';
import { getQuestionCommand } from './commands/getQuestion';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	
	const disposable = vscode.commands.registerCommand('leetcodeextension.getQuestion', getQuestionCommand);

	
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
