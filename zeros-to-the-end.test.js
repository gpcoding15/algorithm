const  { moveAllZerosToTheEnd  }= require('./zeros-to-the-end');

describe('moveAllZerosToTheEnd', () => {
        test("should move all the zeros from the array to the end of it", () => {
            const numbers = [0,1,0,3,12]

            const result = moveAllZerosToTheEnd(numbers);

            expect(result).toStrictEqual([ 1, 3, 12, 0, 0 ]);
        });
});
