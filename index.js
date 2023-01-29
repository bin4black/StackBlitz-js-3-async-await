// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log ("mi primer async-await")

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};
let is_shop_open = true;

async function order(){
  try{
    await abc;
  }
  catch(error){
    console.log("abc no existe",error)

  }

  finally{
    console.log("runs anyway")
  }
}

order()