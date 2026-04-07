import axios from "axios";

const query = `
query getQuestionDetail($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    title
    difficulty
    metaData
    sampleTestCase
  }
}
`;

function parseMetaData(metaData: string) {
    return JSON.parse(metaData);
}

export async function fetchQuestion(slug: string) {
    const response = await axios.post("https://leetcode.com/graphql", {
        query,
        variables: { titleSlug: slug }
    });

    const q = response.data.data.question;

    const meta = parseMetaData(q.metaData);

    return {
        id: Number(q.questionId),
        title: q.title,
        difficulty: q.difficulty,

        isClassProblem: true,

        functionName: meta.name,
        returnType: meta.return.type,

        parameters: meta.params?.map((p: any) => ({
            name: p.name,
            type: p.type
        })),

        className: "Solution",

        methods: [], // later

        testCases: q.sampleTestCase
    };


}
