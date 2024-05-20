let string = "Javascript";
//Rotate the String n Times in the Left Direction
// expected outcome: vascriptja

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using Substring Method
function rotateLeft(str, n) {
    n = n % str.length; // This ensures n is within the string length
    return str.substring(n) + str.substring(0, n);
}

let string = "Javascript";
console.log(rotateLeft(string, 2));  // Output: vascriptJa

/**This method involves using the substring method to slice the string into 
 * two parts based on the number of rotations n, and then concatenate these 
 * parts in reverse order. */





/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using Array Methods

function rotateLeft(str, n) {
    let arr = str.split('');
    n = n % str.length; // This ensures n is within the string length
    let removed = arr.splice(0, n); // Remove the first n elements
    return arr.concat(removed).join(''); // Concatenate and convert to string
}

let string = "Javascript";
console.log(rotateLeft(string, 2));  // Output: vascriptJa

/**Convert the string to an array, use array manipulation methods, 
 * and then convert it back to a string. */




/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using ES6 Features
function rotateLeft(str, n) {
    n = n % str.length; // This ensures n is within the string length
    return `${str.slice(n)}${str.slice(0, n)}`;
}

let string = "Javascript";
console.log(rotateLeft(string, 2));  // Output: vascriptJa

/**Each of these methods can effectively rotate the string "Javascript" to the 
 * left by any number of times specified by n. You can choose any method based 
 * on your preference or specific requirements for performance or readability. */