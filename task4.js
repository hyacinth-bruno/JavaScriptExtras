const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

// write logic to meet the expected outcome:
// ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using map Method
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

const babyAnimals = animals.map(animal => `baby ${animal}`);

console.log(babyAnimals); // Outputs: ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

/** The map method is perfect for transforming each element in an array and returning a new array of the same length with the transformed items. */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using a for Loop
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
let babyAnimals = [];

for (let i = 0; i < animals.length; i++) {
    babyAnimals.push(`baby ${animals[i]}`);
}

console.log(babyAnimals); // Outputs: ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

/**A traditional for loop can also be used to iterate through the array and prepend "baby" to each animal. */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using forEach Method
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
let babyAnimals = [];

animals.forEach(animal => {
    babyAnimals.push(`baby ${animal}`);
});

console.log(babyAnimals); // Outputs: ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

/**The forEach method executes a provided function once for each array element. This method doesn't return a new array, so you need to create one and push into it. */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Using reduce Method

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

const babyAnimals = animals.reduce((acc, animal) => {
    acc.push(`baby ${animal}`);
    return acc;
}, []);

console.log(babyAnimals); // Outputs: ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

/**Although typically used for reducing an array into a single value, reduce can also be utilized to construct new arrays. */