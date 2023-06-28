// const num1 = 15;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

// SWITCH
// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Змінні blockA і blockB не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Знайшли число 3, перериваємо виконання циклу");
//       break;
//     }
//   }

//   console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// Автоперевірка 1

// 1 задание
// const productName = 'Droid';
// const pricePerItem = '2000';
// console.log(productName);
// console.log(pricePerItem);

// 2 задание
// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem)

// 3 задание
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// console.log(topSpeed)
// console.log(distance)
// console.log(login)
// console.log(isOnline)
// console.log(isAdmin)

// 4 задание
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)

// 5 задание
// const productName = "Droid";
// const pricePerItem = 3500;
// const messege = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(messege);

// 6 задание
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const messege = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(messege);

// 7 задание
// function sayHi (){
//     console.log("Hello, this is my first function!")
// }
// sayHi ("Hello, this is my first function!")

// 8 задание
// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//   }

//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// 9 задание
// function add(a, b, c) {
//     return a + b + c;
//   }

//   add(2, 5, 8); // 15

//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// 10 задание
// function makeMessage(name, price) {
//   console.log(name, price)
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;

// }

// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// 11 задание
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);

//   // Change code above this line
//   return totalPrice;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// 12 задание
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   console.log(message);

//   // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// 13 задание
// function isAdult(age) {

//   const passed = age >= 18;
//   console.log(passed)

//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// 14 задание
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
// console.log(isMatch);
//   // Change code above this line
//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// 15 задание
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
// console.log(message)
//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// 16 задание
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.'
//   }
//   console.log(message)
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// 17 задание
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a, b, c, d);

// 18 задание
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!'
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// 19 Задание
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
// console.log(message)
//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// 20 задание
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!'
//   } else if (ordered > available) {
//   message = 'Your order is too large, there are not enough items in stock!'
//   } else {
//     message = 'The order is accepted, our manager will contact you'
//   }
//   console.log(message)
//     // Change code above this line
//     return message;
//   }
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(70, 0);
//   checkStorage(200, 20);
//   checkStorage(200, 250);
//   checkStorage(150, 0);

// 21 задание
// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; // Change this line
//   console.log(isInRange)
//     return isInRange;
//   }

//   isNumberInRange(10, 30, 17);
//   isNumberInRange(10, 30, 5);
//   isNumberInRange(20, 50, 24);
//   isNumberInRange(20, 50, 76);

// 22 задание
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
//   console.log(canAccessContent)
//     return canAccessContent;
//   }

//   checkIfCanAccessContent("pro")
//   checkIfCanAccessContent("starter")
//   checkIfCanAccessContent("vip")
//   checkIfCanAccessContent("free")

// 23 задание
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
//   console.log(isNotInRange)
//     return isNotInRange;
//   }

//   isNumberNotInRange(10, 30, 17)
//   isNumberNotInRange(10, 30, 5)
//   isNumberNotInRange(20, 50, 24)
//   isNumberNotInRange(20, 50, 76)

// 24 задание
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT
//   }
//   console.log(discount)
//     // Change code above this line
//     return discount;
//   }
//   getDiscount(137000)
//   getDiscount(46900)
//   getDiscount(8250)
//   getDiscount(1300)
//   getDiscount(5000)
//   getDiscount(20000)
//   getDiscount(50000)

// 25 задание
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line

//     // if (ordered > available) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//   console.log(message)
//     // Change code above this line
//     return message;
//   }
//   checkStorage(100, 50)
//   checkStorage(100, 130)
//   checkStorage(200, 20)
//   checkStorage(200, 150)
//   checkStorage(150, 180)

// 26 задание
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//    message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     // Change code above this line
//     console.log(message)
//     return message;
//   }

//   checkPassword("jqueryismyjam")
//   checkPassword("angul4r1sl1f3")
//   checkPassword("r3actsux")

// 27 завдання
// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (type) { // Change this line
//       case 'starter':  // Change this line
//         price = 0; // Change this line
//         break;

//       case "professional": // Change this line
//         price = 20; // Change this line
//         break;

//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }
//   console.log(price)
//     // Change code above this line
//     return price;
//   }

//   getSubscriptionPrice("professional")
//   getSubscriptionPrice("organization")
//   getSubscriptionPrice("starter")

// 28 завдання
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// //   if (password === null) {
// //     message = "Canceled by user!";
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //   }
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//       default:
//         message = "Access denied, wrong password!";
//   }

//   console.log(message);
//   // Change code above this line
//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// 29 завдання
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// 30 завдання
// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log(message)
//     return message;
//   }

//   getNameLength("Poly")
//   getNameLength("Harambe")
//   getNameLength("Billy")
//   getNameLength("Joe")

// 31 завдання
// const courseTopic = "JavaScript essentials";


// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line
// console.log(courseTopicLength)
// console.log(firstElement)
// console.log(lastElement)

// 32 завдання
// function getSubstring(string, length) {
//     const substring = string.slice(string, length); // Change this line
//   console.log(substring)
//     return substring;
//   }

//   getSubstring("Hello world", 3)
//   getSubstring("Hello world", 6)
//   getSubstring("Hello world", 8)
//   getSubstring("Hello world", 11)
//   getSubstring("Hello world", 0)

// 33 завдання
// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//     if (message.length > maxLength) {
//         result = message.slice(0,maxLength) + "...";
//     } else {
//         result = message
//     }
//   console.log(result)
//     /// Change code above this line
//     return result;
//   }
//   formatMessage("Curabitur ligula sapien", 16)
//   formatMessage("Curabitur ligula sapien", 23)
//   formatMessage("Vestibulum facilisis purus nec", 20)
//   formatMessage("Vestibulum facilisis purus nec", 30)
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

// 34 завдання
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
//   console.log(normalizedInput)
//     return normalizedInput;
//   }

//   normalizeInput("Hello world")
//   normalizeInput("This ISN'T SpaM")
//   normalizeInput("Big SALE")

// 35 завдання
// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//     console.log(result)
//      return result;
//    }

//    checkForName("Egor Kolbasov", "Egor")
//    checkForName("Egor Kolbasov", "egor")
//    checkForName("Egor Kolbasov", "egOr")
//    checkForName("Egor Kolbasov", "Zhenya")
//    checkForName("Vadim Nekrasov", "Vadim")
//    checkForName("Vadim Nekrasov", "vadim")
//    checkForName("Vadim Nekrasov", "Dima")

// 36 завдання
// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     const toLowerCaseMessage = message.toLowerCase();
//     if (toLowerCaseMessage.includes("spam") || toLowerCaseMessage.includes("sale")) {
//         result = true;

//     } else {
//         result = false;
//     }
//   console.log(result)
//     // Change code above this line
//     return result;
//   }

//   checkForSpam("Latest technology news")
//   checkForSpam("JavaScript weekly newsletter")
//   checkForSpam("Get best sale offers now!")
//   checkForSpam("Amazing SalE, only tonight!")
//   checkForSpam("Trust me, this is not a spam message")
//   checkForSpam("Get rid of sPaM emails. Our book in on sale!")
//   checkForSpam("[SPAM] How to earn fast money?")