const sentence = ["sense.", "make", "all", "will", "This"];

// expected outcome: ['This', 'will', 'all', 'make', 'sense.']
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using reverse Method
const sentence = ["sense.", "make", "all", "will", "This"];
const reversedSentence = sentence.reverse();

console.log(reversedSentence); // Outputs: ['This', 'will', 'all', 'make', 'sense.']

/**The reverse method reverses the elements of an array in place. 
 * This is the simplest and most direct way to reverse the order of the elements. */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using a for Loop
const sentence = ["sense.", "make", "all", "will", "This"];
let reversedSentence = [];

for (let i = sentence.length - 1; i >= 0; i--) {
    reversedSentence.push(sentence[i]);
}

console.log(reversedSentence); // Outputs: ['This', 'will', 'all', 'make', 'sense.']

/** You can manually reverse the array using a for loop, 
 * which allows for more control over the process. */



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Using reduce Method
const sentence = ["sense.", "make", "all", "will", "This"];
const reversedSentence = sentence.reduce((acc, word) => [word, ...acc], []);

console.log(reversedSentence); // Outputs: ['This', 'will', 'all', 'make', 'sense.']

/** The reduce method can also be used to accumulate elements in reverse order by 
 * pushing each new element to the start of the accumulator array. */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using map and slice
const sentence = ["sense.", "make", "all", "will", "This"];
const reversedSentence = sentence.map((_, i, arr) => arr[arr.length - 1 - i]);

console.log(reversedSentence); // Outputs: ['This', 'will', 'all', 'make', 'sense.']

/**This method involves creating an array of indices in reverse order and 
 * mapping over them to construct the new array. */







