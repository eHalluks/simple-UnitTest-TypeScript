const groupBy = <T>(arr: T[], getKey: (item: T) => string): Record<string, T[]> => {
    const groups: Record<string, T[]> = {};
    arr.forEach((item) => {
        const key = getKey(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
    });
    return groups;
};

// Testy jednostkowe
describe('groupBy', () => {
    it('grupuje elementy na podstawie klucza', () => {
        const inventory = [
            { name: 'asparagus', type: 'vegetables', quantity: 5 },
            { name: 'bananas', type: 'fruit', quantity: 0 },
            { name: 'goat', type: 'meat', quantity: 23 },
            { name: 'cherries', type: 'fruit', quantity: 5 },
            { name: 'fish', type: 'meat', quantity: 22 },
        ];

        const result = groupBy(inventory, ({ type }) => type);

        expect(result).toEqual({
            vegetables: [{ name: 'asparagus', type: 'vegetables', quantity: 5 }],
            fruit: [
                { name: 'bananas', type: 'fruit', quantity: 0 },
                { name: 'cherries', type: 'fruit', quantity: 5 },
            ],
            meat: [
                { name: 'goat', type: 'meat', quantity: 23 },
                { name: 'fish', type: 'meat', quantity: 22 },
            ],
        });
    });
});
//npx jest --verbose --testPathPattern=groupObjsThroughKeys.test.ts