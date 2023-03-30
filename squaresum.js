/**Complete the square sum function so that it squares each number passed into it and then sums the results together.
 
for example, for[1, 2, 2] it should return 9 because 1√ + 2√ + 2√ = 9
**/


// input is an array of numbers
//output is all the numbers square rooted and added

function squareSum(numbers) {
    //create a initial value
    let sum = 0
    //loop through array
    numbers.forEach(number => sum += number ** 2)
    //square all the things in the array
    //return the sum of all the things in the array
    return sum
}