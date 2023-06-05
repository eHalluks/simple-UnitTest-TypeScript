const sumArray = (array: number[]): number => {
    return array.reduce((sum, value) => sum + value, 0);
};

describe('sumArray', () => {
    it('should return 0 for an empty array', () => {
        const array: number[] = [];
        const result = sumArray(array);
        expect(result).toBe(0);
    });

    it('should return the correct sum for an array of positive numbers', () => {
        const array: number[] = [1, 2, 3, 4, 5];
        const result = sumArray(array);
        expect(result).toBe(15);
    });

    it('should return the correct sum for an array of negative numbers', () => {
        const array: number[] = [-1, -2, -3, -4, -5];
        const result = sumArray(array);
        expect(result).toBe(-15);
    });

    it('should return the correct sum for an array with a single element', () => {
        const array: number[] = [10];
        const result = sumArray(array);
        expect(result).toBe(10);
    });

    it('should return the correct sum for an array with duplicate numbers', () => {
        const array: number[] = [2, 2, 2, 2];
        const result = sumArray(array);
        expect(result).toBe(8);
    });
});


//npx jest --verbose --testPathPattern=sumValuesInArr.test.ts