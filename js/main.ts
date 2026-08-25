/**
 *  Challenge: Creat a pizza object type. It should include a 'name'
 * and a 'price' property.
 */

//Getting Type errors here because we are trying to modify constant variables.
//Challenge: Type orderQueue correctly
let cashInRegister = 100;
const orderQueue: Order[] = [];
let orderId = 1;
let nextPizzaId = 1;

type Pizza = {
  id: number;
  name: string;
  price: number;
};

/**
 *  Challenge: Add an Order Type. It should have 'id', 'pizza', and 'status' properties.
 * look through the code if you need a reminder as to what data types those should be.
 */

/**
 *  Challenge: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

/**
 *  Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

/**
 *  Challenge: Teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with, and fix those issues
 */

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  // console.log(
  //   `New Pizza added! Pizza: ${pizza.name}, Price: ${pizza.price}. Current menu:`,
  //   menu,
  // );
  return newPizza;
}

/**
 *  Write another utility function, placeOrder, that takes a pizza name parameter and :
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *      (e.g., { pizza: selectedPizzaObjectFromStep1, status: "ordered"})
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName: string): Order[] | undefined {
  const foundPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!foundPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  //console.log(`Pizza Found: `, foundPizza, ` Price: `, foundPizza.price);
  //console.log(`Cash in register before: `, cashInRegister);
  cashInRegister += foundPizza.price;
  //console.log(`Cash in register after: `, cashInRegister);
  const newOrder: Order = {
    id: orderId++,
    pizza: foundPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  //console.log(`Current queue: `, orderQueue);
  return orderQueue;
}

/**
 *   Challenge : write another utility funciton, completeOrder, that takesa an orderId as a parameter
 *   finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 *   return the found order from the function.
 *
 *   Note: you'll need to ensure that we're adding IDs to our orderes when we create new orders. You
 *   can use a global 'nextOrderId' variable and increment it every time a new order is created to
 *   simulate real IDs being managed for us by a database.
 */

/**
 *  Challenge: Fix the warning below (foundOrder.status) by handlign the "sad Path" scenario!
 */

/**
 * Challenge: add types to our generic 'addToArray' function. It should work
 * for adding new pizzas to the 'menu' and adding new orders to the 'orderQueue'
 */

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  console.log(array);
  return array;
}

//example usage
//bug here though, if we hover over addToArray with orderQueue parameter the TS generic is infering that our "status" type is a string, but it should
// either be only "ordered" | "completed", so we can add in whatever status value we want, which we DONT want
// So, challenge: what should be passed in as the generic type on line 125?
addToArray(menu, { id: nextPizzaId++, name: "chicken Bacon Ranch", price: 12 });
addToArray<Order>(orderQueue, {
  id: orderId++,
  pizza: menu[2],
  status: "ordered",
});

function completeOrder(orderId: number): Order | undefined {
  const foundOrder = orderQueue.find((orderObj) => orderObj.id === orderId);
  if (!foundOrder) {
    console.error(
      `Order #${orderId} does not exist in the Queue, try another order number.`,
    );
    return;
  }
  //console.log(`Completed order: `, foundOrder);
  foundOrder.status = "completed";
  //console.log(foundOrder);
  //console.log(`Current Queue: `, orderQueue);
  return foundOrder;
}

/**
 *   Challenge : create a new utility funciton called getPizzaDetail. It will take
 * a paramater called 'identifier', but theres a twist: we want this identifier
 * to be allowed to either be the string anme of the pizza ("Pepperoni"), OR
 * to be the nubmer ID of hte pizza (e.g. 2).
 * 
 * Dont worry about the code inside the function yet, just create the function
 * signature, making susre to teach TS that the 'identifier' parameter is allowed
 * to either be a string or a number
 
 */

//union here , can take a string OR a number (Type Narrowing)

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  /**
   *  Challenge: write the code to check if the parameter is a string
   * or a number, and use the menu.find() method accordingly
   */
  if (typeof identifier === "string") {
    const pizzaDetail = menu.find(
      (pizzaObj) => pizzaObj.name.toLowerCase() === identifier.toLowerCase(),
    );
    console.log(`Found Pizza by name: `, pizzaDetail);
    return pizzaDetail;
  } else if (typeof identifier === "number") {
    const pizzaDetail = menu.find((pizzaObj) => pizzaObj.id === identifier);
    console.log(`Found Pizza by id: `, pizzaDetail);
    return pizzaDetail;
  } else {
    throw new TypeError(
      "Parameter 'identifier must either be a string or a number' ",
    );
  }
}

// addNewPizza({ id: 5, name: "Meat Lover's", price: 12 });
// addNewPizza({ id: 6, name: "Zia", price: 10 });
// addNewPizza({ name: "Meat Lover's", price: 12 });
// addNewPizza({ name: "Zia", price: 10 });

// placeOrder("Pepperoni");
// placeOrder("Veggie");
// placeOrder("Zia");

// completeOrder(1);
// completeOrder(17);
// //console.log("Menu: ", menu);
// //console.log("Cash in Register: ", cashInRegister);
// console.log("Order Queue: ", JSON.stringify(orderQueue));

// completeOrder(2);
// console.log("Order Queue: ", JSON.stringify(orderQueue));

// console.log(`Menu: `, menu);
// getPizzaDetail("Pepperoni");
// getPizzaDetail(3);
