import { Checkout, PayForOnlyNRule, BulkDiscountRule, PricingRules } from './checkout'; // Adjust the import path as needed

describe('Checkout', () => {
    let checkout: Checkout;
    const pricingRules: (BulkDiscountRule | PayForOnlyNRule | PricingRules)[] = [
        {
            sku: 'ipd',
            name: 'Super iPad',
            price: 549.99,
            quantityMoreThan: 4,
            bulkDiscount: 50,
        },
        {
            sku: 'atv',
            name: 'Apple TV',
            price: 109.5,
            quantity: 3,
            payOnlyFor: 2,
        },
        {
            sku: 'mbp',
            name: 'MacBook Pro',
            price: 1399.99
        },
        {
            sku: 'vga',
            name: 'VGA adapter',
            price: 30
        },
    ];

    beforeEach(() => {
        checkout = new Checkout(pricingRules);
    });

    test('should add items to the cart correctly', () => {
        checkout.scan('atv');
        checkout.scan('ipd');
        expect(checkout.cart).toEqual(['atv', 'ipd']);
    });

    test('should not add non-existent SKU to the cart', () => {
        checkout.scan('abc');
        expect(checkout.cart).toEqual([]);
    });

    test('should calculate total price without any discount', () => {
        checkout.scan('atv');
        checkout.scan('atv');
        expect(checkout.total()).toBe(2 * 109.5); // 2 * 109.5 without discount
    });

    test('should apply bulk discount correctly', () => {
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd'); // 4 items, bulk discount applies
        expect(checkout.total()).toBe(5 * (549.99 - 50)); // (5 * (549.99 - 50)) = 160
    });

    test('should apply "Pay for Only N" rule correctly', () => {
        checkout.scan('atv');
        checkout.scan('atv');
        checkout.scan('atv'); // 3 items of atv, should pay for 2 only
        expect(checkout.total()).toBe(109.5 * 2);

        checkout.scan('atv');
        checkout.scan('atv'); // 5 items of B, should pay for 4 items
        expect(checkout.total()).toBe(109.5 * 4);
    });

    test('should handle a mix of discount rules', () => {
        checkout.scan('atv');
        checkout.scan('atv');
        checkout.scan('atv');
        checkout.scan('atv');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('ipd');
        checkout.scan('mbp');
        checkout.scan('vga');
        checkout.scan('vga');
        checkout.scan('vga');
        checkout.scan('vga');
        checkout.scan('vga');

        expect(checkout.total()).toBe(109.5 * 3 + 549.99 * 3 + 1399.99 + 30 * 5);

        checkout.scan('ipd');
        checkout.scan('ipd'); // Now bulk discount is applicable
        expect(checkout.total()).toBe(109.5 * 3 + (549.99 - 50) * 5 + 1399.99 + 30 * 5);
    });

    test('should return total as 0 for an empty cart', () => {
        expect(checkout.total()).toBe(0);
    });
});
