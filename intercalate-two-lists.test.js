const { intercalateLists } = require("./intercalate-two-lists");

describe("test intercalate lists", () => {
    test("it should intercalate lists given 2 lists", () =>{
        const list1 = ["a","b","c"]
        const list2 = [1,2,3]
        
        const result = intercalateLists(list1, list2)
        
        expect(result).toStrictEqual([ 'a', 1, 'b', 2, 'c', 3 ])
    })
});

