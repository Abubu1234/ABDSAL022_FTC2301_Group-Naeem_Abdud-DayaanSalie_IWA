// script.js

const order1 = document.querySelector('[data-key="order1"]');
const order1Biscuits = order1.querySelector('.biscuits .count');
const order1Donuts = order1.querySelector('.donuts .count');
const order1Pancakes = order1.querySelector('.pancakes .count');
const order1Status = order1.querySelector('.status dd');

const order2 = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2.querySelector('.biscuits .count');
const order2Donuts = order2.querySelector('.donuts .count');
const order2Pancakes = order2.querySelector('.pancakes .count');
const order2Status = order2.querySelector('.status dd');

const order3 = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3.querySelector('.biscuits .count');
const order3Donuts = order3.querySelector('.donuts .count');
const order3Pancakes = order3.querySelector('.pancakes .count');
const order3Status = order3.querySelector('.status dd');

order1Biscuits.innerHTML = order1.dataset.biscuits;
order1Donuts.innerHTML = order1.dataset.donuts;
order1Pancakes.innerHTML = order1.dataset.pancakes;
order1Status.innerHTML = order1.dataset.delivered === "true" ? 'Delivered' : 'Pending';

order2Biscuits.innerHTML = order2.dataset.biscuits;
order2Donuts.innerHTML = order2.dataset.donuts;
order2Pancakes.innerHTML = order2.dataset.pancakes;
order2Status.innerHTML = order2.dataset.delivered === "true" ? 'Delivered' : 'Pending';

order3Biscuits.innerHTML = order3.dataset.biscuits;
order3Donuts.innerHTML = order3.dataset.donuts;
order3Pancakes.innerHTML = order3.dataset.pancakes;
order3Status.innerHTML = order3.dataset.delivered === "true" ? 'Delivered' : 'Pending';