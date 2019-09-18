const functions = require('./functions');

test('Adds', () => {
  expect(functions.add(2,2)).toBe(4);
})

test('Checks the opposite', () => {
  expect(functions.add(2,2)).not.toBe(5);
})

test('Checks null', () => {
  expect(functions.null()).toBeNull();
})

test('Checks undefined', () => {
  expect(functions.undefined()).toBeUndefined();
})

test('Checks for falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

test('Checks for falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

test('Checks for user Brad Traversy', () => {
  expect(functions.createUser()).toEqual({firstName: "Brad", lastName: "Traversy"});
})

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

describe('examining the syntax', () => {
  it('sums numbers', () => {
    expect(1+1).toEqual(2);
  })
})
