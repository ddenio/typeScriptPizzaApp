const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];
let orderId = 1;

/**
 *  Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizza) {
  menu.push(pizza);
  // console.log(
  //   `New Pizza added! Pizza: ${pizza.name}, Price: ${pizza.price}. Current menu:`,
  //   menu,
  // );
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
  //console.log(`Pizza Found: `, foundPizza, ` Price: `, foundPizza.price);
  //console.log(`Cash in register before: `, cashInRegister);
  cashInRegister += foundPizza.price;
  //console.log(`Cash in register after: `, cashInRegister);
  const newOrder = { orderId: orderId, pizza: foundPizza, status: "ordered" };
  orderQueue.push(newOrder);
  //console.log(`Current queue: `, orderQueue);
  orderId++;
  return orderQueue;
}

placeOrder("Pepperoni");
placeOrder("Veggie");

/**
 *   Challenge : write another utility funciton, completeOrder, that takesa an orderId as a parameter
 *   finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 *   return the found order from the function.
 *
 *   Note: you'll need to ensure that we're adding IDs to our orderes when we create new orders. You
 *   can use a global 'nextOrderId' variable and increment it every time a new order is created to
 *   simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
  const completeOrder = orderQueue.find(
    (orderObj) => orderObj.orderId === orderId,
  );
  console.log(`Completed order: `, completeOrder);
  completeOrder.status = "completed";
  console.log(completeOrder);
  console.log(`Current Queue: `, orderQueue);
  return completeOrder;
}

completeOrder(2);
