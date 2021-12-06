import { escapeBranchName } from "./escapeBranchName";

const fixtures = [
    {
        input: undefined,
        output: undefined,
    },
    {
        input: "hello world",
        output: "hello-world-b94d",
    },
    {
        input: "this is a long branch name that should be truncated",
        output: "this-is-a-l-b591",
    },
    {
        input: "this is a long branch name that should be truncated (hash should change)",
        output: "this-is-a-l-524c",
    },
    {
        input: "-- -trim leading dashes",
        output: "trim-leadin-0bd5",
    },
    {
        input: "trim trailing dashes - -- ",
        output: "trim-traili-cc32",
    },
    {
        input: "GH-20 keep upper and lower case",
        output: "gh-20-keep-6ac9",
    },
    {
        input: "GH-20 keep upper and lower CASE",
        output: "gh-20-keep-bb47",
    },
];

test("passes test cases", () => {
    for (const fixture of fixtures) {
        expect(escapeBranchName(fixture.input)).toBe(fixture.output);
    }
});
