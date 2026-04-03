import * as vscode from 'vscode';
import { urlParse } from '../parsers/urlParser';
import { fetchQuestion } from '../services/leetcodeService';


export async function getQuestionCommand() {

    const link = await vscode.window.showInputBox({
        prompt: "Paste LeetCode question link"
    });

    if (!link) {
        vscode.window.showWarningMessage("No link entered");
        return;
    }

    const questionName = urlParse(link);
    vscode.window.showInformationMessage(`Received: ${questionName}`);
    const question = await fetchQuestion(questionName);

    vscode.window.showInformationMessage(question.difficulty);
}