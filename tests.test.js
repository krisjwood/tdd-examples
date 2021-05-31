const main = require('./index.js')

test('test setup working', () => {
    expect(true).toBeTruthy()
  })


test('boiler test', () => {
    // ARRANGE

    // ACT
    const actual = 0;
    const expected = 0;

    // ASSERT
    expect(actual).toBe(expected)
})

test('Test function exists', () => {
    // ARRANGE
    const expected = 'Test works'
    // ACT
    const actual = main.testFunction()

    // ASSERT
    expect(expected).toBe(actual)
})

test('Truth function', () => {
    // ARRANGE
    // const expected = true
    // ACT
    const actual = main.truthFunction()
    // ASSERT
    expect(actual).toBeTruthy()
})

test('Sum test', () => {
    //ARRANGE
    const expected = 20
    const num1 = 10
    const num2 = 10
    //ACT
    const actual = main.sumFunction(num1, num2)
    console.log(actual)
    //ASSERT
    // expect(actual).toBeUndefined()
    expect(actual).toBe(expected)
})