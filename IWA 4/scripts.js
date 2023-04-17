let date = 2050 // changed const to let
let status = 'parent' // changed const to let
let count = 0 // changed const to let

if (date == 2050)  {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	        date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4 //removed let 

	if (status == "student") {
	  console.log('June', 'Youth Day')
	count = count + 1 //removed let 
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3 //removed let 

	if (status == "parent") {
	  console.log(date, 'Christmas Day')
    count = count + 1 //removed let 
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1 //removed let 
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)