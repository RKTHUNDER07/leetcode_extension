import * as vscode from 'vscode';
import { urlParse } from '../parsers/urlParser';
import { fetchQuestion } from '../services/leetcodeService';
import { fileGenerator } from '../generators/filegenerator';
import { get } from 'axios';
import { getContent } from '../template/cpp/getContent';


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
    
    
    // const content = `// ${question.title}\n\n${question.id} \n\n// Sample Test Case:\n${question.testCases} \n\n// Difficulty: ${question.difficulty} \n\n// MetaData: ${question.returnType}, ${question.functionName}`;

    const content=getContent(question);

    await fileGenerator(questionName, content);
}