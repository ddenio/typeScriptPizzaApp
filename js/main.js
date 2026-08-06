// "use strict";
// /**
//  *  Challenge: Creat a pizza object type. It should include a 'name'
//  * and a 'price' property.
//  */
// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ];
// //Getting Type errors here because we are trying to modify constant variables.
// let cashInRegister = 100;
// const orderQueue = [];
// let orderId = 1;
// /**
//  *  Challenge: Add a utility function "addNewPizza" that takes a pizza object
//  * and adds it to the menu.
//  */
// /**
//  *  Challenge: Teach TS that the pizzaObj is supposed to be a Pizza type.
//  * Then like before, look through the code to see if there are any new
//  * TS warnings to deal with, and fix those issues
//  */
// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
//     // console.log(
//     //   `New Pizza added! Pizza: ${pizza.name}, Price: ${pizza.price}. Current menu:`,
//     //   menu,
//     // );
// }
// /**
//  *  Write another utility function, placeOrder, that takes a pizza name parameter and :
//  * 1. finds that pizza object in the menu,
//  * 2. adds the income to the cashInRegister,
//  * 3. pushes a new "order object" to the orderQueue
//  *      (e.g., { pizza: selectedPizzaObjectFromStep1, status: "ordered"})
//  * 4. returns the new order object (just in case we need it later)
//  */
// function placeOrder(pizzaName) {
//     const foundPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//     if (!foundPizza) {
//         console.error(`${pizzaName} does not exist in the menu`);
//         return;
//     }
//     //console.log(`Pizza Found: `, foundPizza, ` Price: `, foundPizza.price);
//     //console.log(`Cash in register before: `, cashInRegister);
//     cashInRegister += foundPizza.price;
//     //console.log(`Cash in register after: `, cashInRegister);
//     const newOrder = { id: orderId++, pizza: foundPizza, status: "ordered" };
//     orderQueue.push(newOrder);
//     //console.log(`Current queue: `, orderQueue);
//     return orderQueue;
// }
// /**
//  *   Challenge : write another utility funciton, completeOrder, that takesa an orderId as a parameter
//  *   finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
//  *   return the found order from the function.
//  *
//  *   Note: you'll need to ensure that we're adding IDs to our orderes when we create new orders. You
//  *   can use a global 'nextOrderId' variable and increment it every time a new order is created to
//  *   simulate real IDs being managed for us by a database.
//  */
// function completeOrder(orderId) {
//     const foundOrder = orderQueue.find((orderObj) => orderObj.id === orderId);
//     console.log(`Completed order: `, foundOrder);
//     foundOrder.status = "completed";
//     console.log(foundOrder);
//     console.log(`Current Queue: `, orderQueue);
//     return foundOrder;
// }
// addNewPizza({ name: "Meat Lover's", price: 12 });
// addNewPizza({ name: "Zia", price: 10 });
// placeOrder("Pepperoni");
// placeOrder("Veggie");
// placeOrder("Zia");
// completeOrder(1);
// console.log("Menu: ", menu);
// console.log("Cash in Register: ", cashInRegister);
// console.log("Order Queue: ", JSON.stringify(orderQueue));
// completeOrder(2);
// console.log("Order Queue: ", JSON.stringify(orderQueue));
// //# sourceMappingURL=main.js.map
