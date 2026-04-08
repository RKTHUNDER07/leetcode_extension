import * as vscode from 'vscode';
import { urlParse } from '../parsers/urlParser';


export async function fileGenerator(questionName: string,content: string) {

        questionName=questionName.replaceAll('-', '_'); 
        const folders = vscode.workspace.workspaceFolders;

        if (!folders) {
            vscode.window.showErrorMessage("Open a workspace folder first!");
            return;
        }
        const folderUri = folders[0].uri;

        

        const fileUri = vscode.Uri.joinPath(folderUri, `${questionName}.cpp`);

        const encoder = new TextEncoder();

        await vscode.workspace.fs.writeFile(fileUri, encoder.encode(`${content}`));

        const doc = await vscode.workspace.openTextDocument(fileUri);
        await vscode.window.showTextDocument(doc);



}


