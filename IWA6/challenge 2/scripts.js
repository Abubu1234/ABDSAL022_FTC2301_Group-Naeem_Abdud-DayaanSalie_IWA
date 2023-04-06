const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change beconst taxAsDecimal = tax / '100';


if (hourOfDay !== null && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00') {
    const taxAsDecimal = parseInt(tax) / parseInt('100');
    const startingAfterTax = salary * (parseInt('1') - taxAsDecimal);
    const balance = startingAfterTax - transport - food - rent;
    console.log("R", balance .toFixed(2))
}
	
