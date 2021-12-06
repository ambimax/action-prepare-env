import core from "@actions/core";
import { escapeBranchName } from "./escapeBranchName";

const gitHubEventName = core.getInput("event_name");
const gitHubRefType = core.getInput("ref_type");
const gitHubRef = core.getInput("ref");

console.log("Action inputs:");
console.log("event_name", gitHubEventName);
console.log("ref_type", gitHubRefType);
console.log("ref", gitHubRef);

console.log("Environment variables:");
console.log("GITHUB_HEAD_REF", process.env.GITHUB_HEAD_REF);
console.log("GITHUB_REF", process.env.GITHUB_REF);

const ref = gitHubEventName === "delete" ? gitHubRef : process.env.GITHUB_HEAD_REF ?? process.env.GITHUB_REF;
let branchName = ref;
if (branchName?.startsWith("refs/heads/")) {
    branchName = branchName.slice(11);
}
const escapedBranchName = escapeBranchName(branchName);

console.log("Outputs:");
console.log("branch_name: ", branchName);
console.log("escaped_branch_name: ", escapedBranchName);

core.setOutput("ref", ref);
core.setOutput("branchName", branchName);
core.setOutput("branch_name", branchName);
core.setOutput("escapedBranchName", escapedBranchName);
core.setOutput("escaped_branch_name", escapedBranchName);
