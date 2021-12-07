import crypto from "crypto";

export function sha256(text: string | undefined): string {
    if (typeof text !== "string") {
        return "";
    }

    return crypto.createHash("sha256").update(text).digest("hex");
}
