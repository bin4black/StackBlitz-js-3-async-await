// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log('mi primer async-await');

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};
let is_shop_open = true;

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('which topping would you love?'));
    }, 5000);
  });
}

async function kitchen() {
  console.log('A');
  console.log('B');
  console.log('C');

  await toppings_choice();

  console.log('D');
  console.log('E');
}

kitchen();
console.log('doing the dishes');
console.log('cleaning the tables');
console.log('taking orders');
