let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

// please extract only the name from input array.
// expected outcome: ["John", "Mike", "Danny", "Lisa", "Sophie"];

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Use map to extract the name from each object
let names = input.map(item => item.name);

console.log(names);  // This will output: ["John", "Mike", "Danny", "Lisa", "Sophie"]

/*You can extract just the names from the input array in 
JavaScript using the map method, which is perfect for 
transforming an array's items into a new array based on 
some criteria—in this case, extracting the name property 
from each object*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using reduce
let names = [];
input.forEach(item => {
  names.push(item.name);
});

console.log(names);

/* The reduce method executes a reducer function on each element of 
the array, resulting in a single output value, which can be an array in this case.*/


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using a for loop
let names = [];
for (let i = 0; i < input.length; i++) {
  names.push(input[i].name);
}

console.log(names);  // Outputs: ["John", "Mike", "Danny", "Lisa", "Sophie"]

/*This traditional approach involves looping through the 
array and pushing each name property into a new array:*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using forEach method
let names = [];
input.forEach(item => {
  names.push(item.name);
});

console.log(names);  // Outputs: ["John", "Mike", "Danny", "Lisa", "Sophie"]
/* 
forEach is another array method that can be used to iterate over the 
array elements and perform operations. It's not used for returning a 
new array but can be used to build one: */