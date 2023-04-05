const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const myLocation = "RSA"
let shipping = null
let currency = null
const customers = 1
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED
const total = (shoes + toys + shirts + batteries + pens)
const price = shipping + total

if (myLocation === "RSA") {
     shipping = 400 
    currency = "R"
} else if(myLocation === "NAM") {
    shipping = 600 || 800 
    currency = "$"
} 
if (total > 1000) {
    if (myLocation === "NAM" && customers < 2){
        shipping = 0
    } else if (myLocation === "RSA" && customer < 2)
{
shipping = 0 
}
}

if ((shipping !== 0) && (customers !== 1)){
    console.log(currency , price , customers ) + console.log(FREE_WARNING) 
}

if (myLocation === "NK"){
    console.log(BANNED_WARNING)
} 

 

