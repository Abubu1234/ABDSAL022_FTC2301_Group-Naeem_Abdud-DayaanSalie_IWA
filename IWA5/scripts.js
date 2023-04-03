FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

let location = "RSA" || "NAM"
let shipping = null
let currency = "R" || "$"
let customers = 1
const price = shipping + total

if (location = "RSA") {
	shipping === 400
	currency === "R" 
} else if (location === "NAM") {
	shipping = 600
	currency = "$"
} else {
	shipping = 800
}

if ( location = "NAM") {
	shipping = 600 && currency === "$"
} 
if (shipping = 800) {
	location = "NK"
}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 

var total = (shoes + toys + shirts + batteries + pens)

if (total > 1000) {
	shipping = 0 || calcShipping
}

if (shipping = 0 && customers !== 1  ){ 
	console.log(FREE_WARNING) 
}
    

if (location === "NK"){ 
	console.log(total, currency, shoes + batteries + pens + shirts + shipping) 
	
} else {
	console.log(BANNED_WARNING)  
}

customers = 1
currency = null