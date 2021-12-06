import core from "@actions/core";
import { escapeBranchName } from "./escapeBranchName";

const ref = core.getInput("github_ref") ?? process.env.GITHUB_HEAD_REF ?? process.env.GITHUB_REF;
const branchName = ref?.slice(11);
const escapedBranchName = escapeBranchName(branchName);

core.setOutput("ref", ref);
core.setOutput("branchName", branchName);
core.setOutput("branch_name", branchName);
core.setOutput("escapedBranchName", escapedBranchName);
core.setOutput("escaped_branch_name", escapedBranchName);
