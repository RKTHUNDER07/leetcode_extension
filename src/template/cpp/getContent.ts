
import question from '../../models/question';
export function getContent(question:question) :string{
  return `
  
  // ${question.title}
  // Difficulty: ${question.difficulty}
  
  #include <bits/stdc++.h>
  using namespace std;
  
  ${question.returnType} ${question.functionName}(${question.parameters?.map(p => `${p.type} ${p.name}`).join(', ')}){
    //Write your code here


  }

  int main() {
    //Sample Test Case
    ${question.testCases.split('\n').map((testCase, index) => `// Test Case ${index + 1}: ${testCase}`).join('\n')}

  }

`};