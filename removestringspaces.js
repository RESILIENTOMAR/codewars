//Write a function that removes the spaces from the string, then return the resultant string.


function noSpace(x) {
    let initialString = x
    let newString = initialString.split(" ").join("")
    return (newString)
}

noSpace("This is a string")