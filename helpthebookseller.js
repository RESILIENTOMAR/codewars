/*A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.*/



function stockList(listOfArt, listOfCat) {
    // If there are no books or categories, return an empty string
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return "";
    }

    // Create an object to store the number of books for each category
    let stock = {};
    for (let i = 0; i < listOfCat.length; i++) {
        stock[listOfCat[i]] = 0;
    }

    // Loop through each book and add its quantity to the appropriate category
    for (let i = 0; i < listOfArt.length; i++) {
        let book = listOfArt[i];
        let code = book.charAt(0);
        let quantity = parseInt(book.split(" ")[1]);
        if (stock.hasOwnProperty(code)) {
            stock[code] += quantity;
        }
    }

    // Create an array of strings for each category and its quantity
    let result = [];
    for (let i = 0; i < listOfCat.length; i++) {
        let category = listOfCat[i];
        let quantity = stock[category];
        result.push(`(${category} : ${quantity})`);
    }

    // Return the result as a string joined by spaces
    return result.join(" - ");
}
