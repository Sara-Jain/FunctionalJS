module.exports  = function upperCaser(input) {
    if(typeof input != 'string') return 'Invalid input format';
    return input.toUpperCase();
}