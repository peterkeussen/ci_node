
const func = require('./index');

test('add 20 + 10 to be equal 30', () => {
    expect(func.add(10,20)).toBe(30);
});

test('times 20 * 10 to be equal 200', () => {
    expect(func.times(10,20)).toBe(200);
});

test('sub 20 - 10 to be equal 10', () => {
    expect(func.sub(20,10)).toBe(10);
});

test('div 20 / 10 to be equal 2', () => {
    expect(func.div(20,10)).toBe(2);
});

