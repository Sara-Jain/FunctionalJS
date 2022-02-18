
const upperCaser = require('../upperCase')
// Failure case: Should return invalid message if input is not string
// Success case: Should return uppercase value if input is string

describe('UpperCaser function', () => {
    it('Should return invalid message if input is not string', () => {
        expect(upperCaser(1234)).toBe('Invalid input format');
    });
    it('Should return uppercase value if input is string', () => {
        expect(upperCaser('hello')).toBe('HELLO');
    });
});