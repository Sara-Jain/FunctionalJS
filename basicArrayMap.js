module.exports = doubleAll = (array) => {
    if (array.constructor !== Array) return 'Invalid input format';
    if (array.length > 20) return 'Array size out of bounds';
    if (array.every((num) => { return num > 9 || num < 0; })) return 'Array values out of range';
    return array.map(number => number * 2);
    // return array.map((num) => {
    //     return num * 2;
    // });
};


// function doubleAll(numbers) {
//     numbers = numbers.map(number => number * 2);
//     return numbers;
// }

// module.exports = doubleAll