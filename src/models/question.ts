interface question {
    id: number;
    title: string;
    difficulty: string;
    functionName: string;
    returnType: string;
    parameters?: {
        name: string;
        type: string;
    }[];
    testCases: string;
}

export default question;