//Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

function getSumOfDigits(integer) {
    var digits = Math.floor(integer).toString();
    var sum = 0;
    for (var ix = 0; ix < digits.length; ix++) {
        sum += parseInt(digits[ix]);
    }
    return sum;
}