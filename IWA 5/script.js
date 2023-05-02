FREE_WARNING = 'Free shipping only applies to single customer orders';
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
NONE_SELECTED = 0;
let shipping = 0;
let customers = 1;
let currency = 'R';
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let totalCost = shoes + toys + shirts + batteries + pens;

if (location = 'RSA') {
    shipping = shipping + 400;
}


if (location = 'NAM') {
    shipping = shipping + 600;
} else {
    shipping = shipping + 800;
}

if (totalCost >= 1000 && customers === 1 && (location === 'RSA' || 'NAM')) {
    shipping = 0;
} else if (totalCost <= 1000) {
    shipping = 400;
}


if (shipping === 0 && customers >= 2) {
    console.log(FREE_WARNING);
}
if (location = 'NK') {
    console.log(BANNED_WARNING);
}
console.log('Price:', currency, totalCost + shipping);