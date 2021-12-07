import { sha256 } from "./util";

export function escapeBranchName(name: string | undefined) {
    if (name === undefined) {
        return undefined;
    }

    const maxLength = 16;
    const hashLength = 4;
    const hash = sha256(name);

    return (
        name
            ?.replace(/[^a-zA-Z0-9]/g, "-")
            .replace(/^-+/g, "")
            .slice(0, maxLength - 1 - hashLength)
            .replace(/-+$/g, "") + `-${hash.slice(0, hashLength)}`
    )
        .replace(/^-+/g, "")
        .toLowerCase();
}
