const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = "R" + parseInt(leoBalance) + parseInt(sarahBalance)
const leo = " ${leoName} + ${leoSurname} + \"owed\" + \"R\" + ${sarahBalance}"
const sarah = " ${sarahName} + ${sarahSurname} + \"Owed\" + \"R\" + ${sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result.toFixed(2))