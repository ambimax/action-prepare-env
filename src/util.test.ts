import { sha256 } from "./util";

describe("sha256", () => {
    test("returns empty string on undefined", () => {
        expect(sha256(undefined)).toBe("");
    });

    test("returns correct hash", () => {
        expect(sha256("")).toBe("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
        expect(sha256("hello world")).toBe("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");
        expect(sha256("Hello World")).toBe("a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e");
    });
});
