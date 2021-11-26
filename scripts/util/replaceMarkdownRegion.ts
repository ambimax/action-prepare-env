/**
 * Replaces a region in a markdown file.
 *
 * @param input The input to replace the region in.
 * @param name The name of the region.
 * @param value The value to set the region to.
 *
 * @example const input = `
 *          # Hello world
 *          <!-- region:helloworld start -->
 *          <!-- region:helloworld end -->
 *          This is just an example.
 *          `;
 *
 *          const output = replaceMarkdownRegion(input, "helloworld", "Hello!");
 *
 *          const expectedOutput = `
 *          # Hello world
 *          <!-- region:helloworld start -->
 *          Hello!
 *          <!-- region:helloworld end -->
 *          This is just an example.
 *          `;
 */
export function replaceMarkdownRegion(input: string, name: string, value: string): string {
    const startMatch = new RegExp(`<!--\\s+region:${name}\\s+start\\s+-->`).exec(input);
    const start = startMatch ? startMatch.index + startMatch[0].length : undefined;

    const endMatch = new RegExp(`<!--\\s+region:${name}\\s+end\\s+-->`).exec(input);
    const end = endMatch?.index;

    if (!start || !end) {
        return input;
    }

    if (start > end) {
        throw new Error(`Markdown region ${name} ends before it starts.`);
    }

    return input.slice(0, start) + `\n\n${value}\n\n` + input.slice(end);
}
