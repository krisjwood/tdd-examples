const testing = require('./index.js')

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
    const actual = testing.testFunction()

    // ASSERT
    expect(expected).toBe(actual)
})