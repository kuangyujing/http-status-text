const { httpStatusText } = require('./index')
//console.log(httpStatusText(500))
test('500 Error', () => {
    expect(httpStatusText(500)).toBe('Internal Server Error')
})
