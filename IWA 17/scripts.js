// scripts.js

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

    for (let i = 0; i <legnth; i++) {                        //fixed loop expression
        result.push(i)
    }
    return result; 
}

const createData = () => {
    //added const and let to vars
    
    const current = new Date ();                             //added brackets for new Date()function
    current.setDate(1)
    
    const startDay = current.getDay();                      //change day to getDay() function
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)                            //amount of weeks in a month 
    const days = createArray(7)                             //amount of days in a week
    let value = null                                        //made this variable be let because it = null so it will be able to be changed 
 
    const result = [];

    for ( let weekIndex of  weeks) {
        value = {
            week: weekIndex + 1,
            days: [],
        }

        for (let dayIndex of days) {                             // added let and changed of to in 
            const day = (weekIndex * 7) + dayIndex - startDay +1 //changed the var "value" to "day"
            const isValid = day > 0 && day <= daysInMonth

            value.days.unshift({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : "",           //used correct ternary operator to show date of day if true or blank if false
            })
        }

        result.push(value)      
    }
    return result;
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td class="${classString}">
            ${value}
        </td>
        ${existing}
    `;
}

const createHtml = (data) => {
    let result = ''

    for (let week of data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
        for (dayOfWeek, value of days) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

			if (isToday) classString = `${classString} table__cell_today` 
            if (isWeekend) classString = '{classString} table__cell_weekend' // changed === to = 
            if (isAlternate) classString = '{classString} table__cell_alternate' // changed === to = 
            innter = addCell(inner, classString, day.value)
        }
        inner = addCell(inner, 'table__cell table__cell_sidebar',`Week ${week.week}`) 
        result = `<tr>${inner}</tr>`
    }
    return result;
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)