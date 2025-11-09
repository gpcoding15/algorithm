const { findTheSecondBiggestNumber } = require('./second-biggest-number');

describe('findTheSecondBiggestNumber', () => {
    test('should find the second biggest number in array', () => {
        const numbers =[2, 3, 4, 10, 25];

        const result = findTheSecondBiggestNumber(numbers);

        expect(result).toBe(10)
    });

    test('should not return the biggest number', () => {
        const numbers =[2, 3, 4, 10, 25];

        const result = findTheSecondBiggestNumber(numbers);

        expect(result).not.toBe(25)
    });
});