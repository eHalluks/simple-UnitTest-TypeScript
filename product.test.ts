import { returnProductProperty, ProductInter } from './product';

describe('returnProductProperty function', () => {
    const product: ProductInter = {
        name: 'Opakowanie zbiorcze',
        count: 1000,
        isDegradable: true,
    };

    test('should return correct property value', () => {
        expect(returnProductProperty(product, 'name')).toBe('Opakowanie zbiorcze');
        expect(returnProductProperty(product, 'count')).toBe(1000);
        expect(returnProductProperty(product, 'isDegradable')).toBe(true);
    });
});


//npx jest --verbose --testPathPattern=product.test.ts