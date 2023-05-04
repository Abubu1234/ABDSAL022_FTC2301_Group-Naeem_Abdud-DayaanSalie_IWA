const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i <= length - 1; i++) {
        result.push(null);
    };

    return result;
};
const createData = () => { // Declare a function that creates an array of nested objects containing week number and an array of days for each week.
    const current = new Date (); // Create a new date object with the current date.
    current.setDate(1); // Set the date to the first of the current month.
    let startDay = current.getDay(); // Get the day of the week (0-6) for the first day of the month.
    let daysInMonth = getDaysInMonth(current); // Get the number of days in the current month.
    const weeks = createArray(5); // Create an array with 6 null values to represent each week of the month.
    const days = createArray(7); // Create an array with 7 null values to represent each day of the week.
    let value = null; // Set value to null.
    let result = []; // Create an empty array to store the result.
    let day = 0 - startDay; // Calculate the starting day of the week (e.g., Sunday or Monday) by subtracting the day of the week (startDay) from zero.
    for (let weekIndex = 0; weekIndex <= weeks.length - 1; weekIndex++) { // Loop through each week in the weeks array.
        value = {
            week: weekIndex + 1, // Add the week number to the value object.
            days: [], // Add an empty array to the value object to store the days for that week.
        };

        for (let dayIndex = 0; dayIndex <= days.length - 1; dayIndex++) { // Loop through each day in the days array.
            day++; // Increment the day.
            const isValid = (day > 0) && (day <= daysInMonth); // Check if the day is valid (i.e., within the range of days in the month).

            /* Adds the day to the end of the array
             * so that days are added from right to Left. */
            value.days.push({ // Add an object to the days array containing the day of the week and the day value (or an empty string if the day is not valid).
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        };
        result.push(value); // Add the value object to the result array.
    };
    return result; // Return the result array, which contains an array of week objects.
};

/*
This is a function that creates a nested array of objects, where each object represents a week and its days in the month. The function first sets the input date to the first day of the month, then calculates the start day (i.e. the day of the week on which the month starts) and the number of days in the month. It then creates an empty nested array with 6 weeks (as there can be a maximum of 5 weeks in a month), and an empty array with 7 days. It then initializes a counter variable day with a value that is 0 minus the start day (so that the first day of the month starts at index 0 in the days array). It then loops through each week and day, and for each day it pushes an object to the value.days array with the day of the week (0-6) and the day
*/




// Define a function to add a cell to an existing HTML string
// `existing` is the existing HTML string to which the cell should be added
// `classString` is the string containing the CSS classes for the cell
// `value` is the value to be displayed inside the cell
const addCell = (existing, classString, value) => {
    // Create a new HTML string that includes the cell and the existing HTML
    const result = /* html */ 
    `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `;
    
    // Return the new HTML string
    return result;
};

// Define a function to create the HTML table based on the given data
// `data` is an array of objects, each representing a week of the month
const createHtml = (data) => {
    // Initialize an empty string to hold the HTML for the table
    let result = '';

    // Loop over each week in the data
    for (let x = 0; x < data.length; x++) {
        // Initialize an empty string to hold the HTML for the current week
        let inner = '';
        // Get the days for the current week
        const days = data[x].days;

        // Loop over each day in the week, starting from the last day and moving backwards
        for (let y = days.length - 1; y >= 0; y--) {
            // Check if the current day is today
            let isToday = new Date().getDate() === days[y].value;
            // Check if the current day is a weekend day (Saturday or Sunday)
            let isWeekend = days[y].dayOfWeek === 0 || days[y].dayOfWeek === 6;
            // Check if the current week is an "alternate" week (even-numbered weeks)
            let isAlternate = (data[x].week % 2) === 0;

            // Create a string containing the CSS classes for the current cell
            let classString = 'class="table__cell';
            if (isToday) {
                classString += ' table__cell_today';
            }
            if (isWeekend) {
                classString += ' table__cell_weekend';
            }
            if (isAlternate) {
                classString += ' table__cell_alternate';
            }
            classString += '"';

            // Add a cell for the current day to the inner HTML string
            inner = addCell(inner, classString, days[y].value);
        }

        // Add a cell for the current week number to the inner HTML string
        inner = addCell(inner, 'class="table__cell table__cell_sidebar"', `Week ${data[x].week}`);

        // Add a row to the result HTML string, containing the cells for the current week
        result += '<tr>' + inner + '</tr>';
    }

    // Return the final HTML string for the table
    return result;
};


// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);