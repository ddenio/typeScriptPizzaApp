const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
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

//addNewPizza(meatLovers);

/**
 *  Write another utility function, placeOrder, that takes a pizza name parameter and :
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *      (e.g., { pizza: selectedPizzaObjectFromStep1, status: "ordered"})
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
  const foundPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  console.log(`Pizza Found: `, foundPizza, ` Price: `, foundPizza.price);
  console.log(`Cash in register before: `, cashInRegister);
  cashInRegister += foundPizza.price;
  console.log(`Cash in register after: `, cashInRegister);
  const newOrder = { pizza: foundPizza, status: "ordered" };
  orderQueue.push(newOrder);
  console.log(`Current queue: `, orderQueue);
  return orderQueue;
}

placeOrder("Pepperoni");
