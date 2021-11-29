import crypto from "crypto";

export function escapeBranchName(name: string | undefined) {
    if (name === undefined) {
        return undefined;
    }

    const maxLength = 16;
    const hashLength = 4;
    const hash = crypto.createHash("sha256").update(name).digest("hex");

    return (
        name
            ?.replace(/[^a-zA-Z0-9]/g, "-")
            .replace(/^-+/g, "")
            .slice(0, maxLength - 1 - hashLength)
            .replace(/-+$/g, "") + `-${hash.slice(0, hashLength)}`
    ).replace(/^-+/g, "");
}
