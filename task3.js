// Calculate the Number of Days Between Two Dates
let date1 = "11/01/2021";
let date2 = "8/05/2022";

// expected outcome: 276


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using JavaScript Date Objects

function daysBetweenDates(date1, date2) {
    const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let difference = d2 - d1;
    return Math.round(difference / DAY_IN_MILLISECONDS);
}

let date1 = "11/01/2021";
let date2 = "8/05/2022";
console.log(daysBetweenDates(date1, date2));  // Output: 276

/** This method involves creating Date objects from the strings and then calculating the 
 * difference in milliseconds between the two dates, converting that difference to days.*/




/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using Moment.js Library

// First, you need to add moment.js to your project
// npm install moment or include via <script> tag if in HTML

function daysBetweenDates(date1, date2) {
    const moment = require('moment'); // Require moment if using in Node.js environment
    let d1 = moment(date1, "MM/DD/YYYY");
    let d2 = moment(date2, "MM/DD/YYYY");
    return d2.diff(d1, 'days');
}

let date1 = "11/01/2021";
let date2 = "8/05/2022";
console.log(daysBetweenDates(date1, date2));  // Output: 276


/** If you're handling more complex date operations or want more robust date parsing and formatting, 
 you can use a library like Moment.js. This requires including the Moment.js library in your project.*/


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Using Date.UTC() Method
function daysBetweenDates(date1, date2) {
    const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
    let parts1 = date1.split('/');
    let parts2 = date2.split('/');
    let utc1 = Date.UTC(parts1[2], parts1[0] - 1, parts1[1]);
    let utc2 = Date.UTC(parts2[2], parts2[0] - 1, parts2[1]);
    return Math.floor((utc2 - utc1) / DAY_IN_MILLISECONDS);
}

let date1 = "11/01/2021";
let date2 = "8/05/2022";
console.log(daysBetweenDates(date1, date2));  // Output: 276


/** This method uses the Date.UTC() method for both dates to calculate the difference, 
 * which provides the dates in UTC format and avoids local time zone issues.*/