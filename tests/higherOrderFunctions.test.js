const repeat = require('../higherOrderFunctions')
// Success:
// Should run the function n times if n (the input number) >0
// Should run the function n times if it has no parameters 
// Failure:
// Should throw message when input number <=0
// Should throw invalid message when input number is not numerical 
// Should throw invalid message when input number is too large
// Should throw invalid message when input function is not a function
const funcCalled = () => {
    console.log("Function called");
}
describe('Repeat operation function', () => {
    it('should run the function n times if n (the input number)>0 and function called has no return value/parameters', () => {
        expect(repeat(funcCalled, 3)).toBe('Success!');
    });
    it('should throw message when input number <=0', () => {
        expect(repeat(funcCalled, -2)).toBe("Input format invalid.");
    });
    it('should throw invalid message when input number is not numerical', () => {
        expect(repeat(funcCalled, 'hello')).toBe("Input format invalid.");
    });
    it('should throw invalid message when input number is too large', () => {
        expect(repeat(funcCalled, Number.MAX_SAFE_INTEGER + 1)).toBe("Number out of range");
    });

    it('should throw invalid message when input function is not a function', () => {
        expect(repeat(5, 1)).toBe("Input format invalid.");
    });
});