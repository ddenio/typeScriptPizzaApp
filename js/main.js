const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

/**
 *  Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizza) {
  menu.push(pizza);
  console.log(
    `New Pizza added! Pizza: ${pizza.name}, Price: ${pizza.price}. Current menu:`,
    menu,
  );
}

const meatLovers = {
  name: "Meat Lovers",
  price: 12,
};

addNewPizza(meatLovers);
