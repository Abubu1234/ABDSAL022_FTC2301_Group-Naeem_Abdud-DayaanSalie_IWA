<<<<<<< HEAD
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const myLocation = "RSA"
let shipping = null
let currency = null
const customers = 1
const price = shipping + total
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const total = (shoes + toys + shirts + batteries + pens)


if (myLocation === "RSA") {
   let shipping = 400 
   currency === "R" 
} 
if(myLocation === "NAM") {
    let shipping = 600 : 800 
    currency === "$"
} 


   
if (total > 1000 && customers === 1) {
    let shipping = 0
}
    

if (shipping = 0 && customers === 1  ){ 
    console.log(FREE_WARNING) 
}


if (myLocation === "NK" && customers === 1){ 
    console.log(currency, total + shipping, customers ) 

} else {
    console.log(BANNED_WARNING)
}


if (myLocation === "RSA" || "NAM"){
    console.log(FREE_WARNING) && console.log(currency, shoes + batteries + pens + shirts + shipping + toys)
}