const repeat = (operation, num) => {
    if (num > Number.MAX_SAFE_INTEGER) return "Number out of range";
    if (num <= 0 || typeof num !== 'number') return "Input format invalid.";
    else {
        // if(operation.arguments.length > 0) return 'Invalid function, enter no arguments!';
        if(typeof operation !== 'function') return "Input format invalid.";
        operation();
        repeat(operation,--num);
    }
    return "Success!";
}

// function repeat(operation, num) {
//     if(num <= 0 ) return;
//     operation();
//     num--;
//     repeat(operation,num);
//   }

  // Do not remove the line below
  module.exports = repeat