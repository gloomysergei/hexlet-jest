// @ts-check

import getImpelementation from '../implementions/index.js';

const makeCart = getImpelementation(); // right1

test('check of filling of a basket', () => {
    const cart = makeCart();
    cart.addItem({ name: 'car', price: 3 }, 5);
    cart.addItem({ name: 'house', price: 10 }, 2);
    expect(cart.getItems().length).toBe(2);
    expect(cart.getCost()).toBe(35);
});
test('checking the cart with zero item quantity', () => {
    const cart = makeCart();
    cart.addItem({ name: 'car', price: 3 }, 0);
    cart.addItem({ name: 'house', price: 10 }, 0); 
    expect(cart.getItems().length).toBe(2);
    expect(cart.getCost()).toBe(0); 
});
test('checking the correct implementation getCount', () => {
    const cart = makeCart();
    cart.addItem({ name: 'car', price: 3 }, 2);
    cart.addItem({ name: 'house', price: 10 }, 10); 
    expect(cart.getCount()).toBe(12);
});
// END
