//Referência: https://bityli.com/eotLh
import getFactorial from './factorial'

//Teste 1
test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function)
})

//Teste 2
test('getFactorial(3) should return 6', () => {
    const actual = getFactorial(3);
    const expected = 6;

    expect(actual).toBe(expected)
})

//Teste 3
test('getFactorial(4) should return 24', () => {
    const actual = getFactorial(4);
    const expected = 24;

    expect(actual).toBe(expected)
})