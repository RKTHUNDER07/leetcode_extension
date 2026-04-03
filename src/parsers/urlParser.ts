export function urlParse(url: string): string{

    const questionName=url.split("/problems/");

    if(questionName.length<2){
        throw new Error("Invalid LeetCode question link");
    }   
    return questionName[1].split("/")[0];


}