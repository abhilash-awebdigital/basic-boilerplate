import { returnTrue, returnFalse } from "./index";

describe("testing 'returnTrue'", () => {
    test("should return true when called", () => {
        expect(returnTrue()).toBe(true);
    });
});

describe("testing 'returnFalse'", () => {
    test("should return false when called", () => {
        expect(returnFalse()).toBe(false);
    });
});
