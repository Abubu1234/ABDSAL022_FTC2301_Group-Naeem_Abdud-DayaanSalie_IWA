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
const order2Status = order2.querySelector('status dd');

const order3 = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3.querySelector('.biscuits .count');
const order3Donuts = order3.querySelector('.donut s.count');
const order3Pancakes = order3.querySelector('.pancakes .count');
const order3Status = order3.querySelector('.status dd');

order1Biscuits.innerText = order1.dataset.biscuits;
order1Donuts.innerText = order1.dataset.donuts;
order1Pancakes.innerText = order1.dataset.pancakes;
order1Status.innerText = order1.dataset.delivered === "true" ? 'Delivered' : 'Pending';

order2Biscuits.innerText = order2.dataset.biscuits;
order2Donuts.innerText = order2.dataset.donuts;
order2Pancakes.innerText = order2.dataset.pancakes;
order2Status.innerText = order2.dataset.delivered === "true" ? 'Delivered' : 'Pending';

order3Biscuits.innerText = order3.dataset.biscuits;
order3Donuts.innerText = order3.dataset.donuts;
order3Pancakes.innerText = order3.dataset.pancakes;
order3Status.innerText = order3.dataset.delivered === "true" ? 'Delivered' : 'Pending';