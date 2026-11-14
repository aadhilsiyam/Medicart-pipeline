const test = require('node:test');
const assert = require('node:assert');
const { calculateTotal, calculateDeliveryFee } = require('./app');

test('total for 2 items at 500 is 1000', () => {
  assert.strictEqual(calculateTotal(500, 2), 1000);
});

test('delivery fee is 0 when total is 5000 or more', () => {
  assert.strictEqual(calculateDeliveryFee(5000), 0);
  assert.strictEqual(calculateDeliveryFee(5500), 0);
});

test('delivery fee is 350 when total is below 5000', () => {
  assert.strictEqual(calculateDeliveryFee(4999), 350);
  assert.strictEqual(calculateDeliveryFee(1500), 350);
});
