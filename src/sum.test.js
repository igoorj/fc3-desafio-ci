const soma = require('./sum')

test("add 1 + 2 to be equal 3", ()=> {
    expect(soma(1,2)).toBe(3);
})