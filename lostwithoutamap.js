//Given an array of integers, return a new array with each value doubled.


function maps(x) {
    const doubledArr = [];
    for (let i = 0; i < x.length; i++) {
        doubledArr.push(x[i] * 2);
    }
    return doubledArr;
}