const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

// expected outcome: [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using sort Method
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
const sortedYears = years.sort((a, b) => b - a);

console.log(sortedYears); // Outputs: [2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922]

/** The sort method can directly sort the array, 
 * but it needs a custom comparator for numerical sorting in 
 * descending order since by default it sorts based on string values.*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using sort and reverse
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
const sortedYears = years.sort((a, b) => a - b).reverse();

console.log(sortedYears); // Outputs: [2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922]

/**You can sort the array in ascending order and then reverse it to achieve descending order. 
 * This method involves an extra step compared to directly sorting in descending order. */



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using reduce
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
const sortedYears = years.reduce((sorted, year) => {
    const index = sorted.findIndex(sortedYear => year > sortedYear);
    if (index === -1) {
        sorted.push(year);
    } else {
        sorted.splice(index, 0, year);
    }
    return sorted;
}, []);

console.log(sortedYears); // Outputs: [2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922]

/** The reduce method can be creatively used to insert each element into a new 
 * array in the sorted position, thus building the sorted array directly.*/


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using forEach and splice
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
let sortedYears = [];

years.forEach(year => {
    let placed = false;
    for (let i = 0; i < sortedYears.length && !placed; i++) {
        if (year > sortedYears[i]) {
            sortedYears.splice(i, 0, year);
            placed = true;
        }
    }
    if (!placed) {
        sortedYears.push(year);
    }
});

console.log(sortedYears); // Outputs: [2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922]


/** This approach involves iterating over each element and placing it into the 
 * correct position in a new array using the splice method. */