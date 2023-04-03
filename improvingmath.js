/** Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:**/

Math.roundTo = function (number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}