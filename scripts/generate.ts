import fs from "fs/promises";
import { codeBlock } from "common-tags";
import { replaceMarkdownRegion } from "./util/replaceMarkdownRegion";

(async function () {
    console.log("Updating readme...");

    const [gitTag] = process.argv.slice(2);
    if (!gitTag) {
        console.error("Please specify a valid git tag as first parameter!");
        process.exit(1);
    }

    let readme = await fs.readFile("README.md", "utf8");

    const exampleCode = codeBlock`
        \`\`\`yaml
        - id: env
          uses: ambimax/action-prepare-env@${gitTag}

        - run: echo \${{ steps.env.outputs.escaped_branch_name }}
        \`\`\`
    `;

    readme = replaceMarkdownRegion(readme, "example-code", exampleCode);

    await fs.writeFile("README.md", readme);
})();
