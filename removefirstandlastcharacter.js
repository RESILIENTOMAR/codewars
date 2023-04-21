/*This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).*/


function array(string) {
    // Split the input string into an array of character sequences
    const arr = string.split(',');

    // If there are less than 3 elements in the array, return null
    if (arr.length < 3) {
        return null;
    }

    // Remove the first and last elements of the array
    arr.shift();
    arr.pop();

    // If the resulting array is empty, return null
    if (arr.length === 0) {
        return null;
    }

    // Join the remaining elements of the array with spaces and return the result
    return arr.join(' ');
}
