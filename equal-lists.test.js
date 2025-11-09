const {verifyIfListsAreEquals} = require('./equal-lists.js');

describe("verifyIfListsAreEquals", () => {
    test("should return true when both lists are equal", () => {
        const list1 = [1,2,3];
        const list2 = [1,2,3];

        const result = verifyIfListsAreEquals(list1, list2);

        expect(result).toBe(true);
    });
});
