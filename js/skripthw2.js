// Масиви
// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// Інтерація по масиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// Методи масиву
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

/**
  |============================
  | Функції
  |============================
*/

// // 1. Оголошення функції multiply
// function multiply() {
//     // Тіло функції
//     console.log("Це лог на момент виклику функції multiply");
//   }

//   // 2. Виклики функції multiply
//   multiply(); // 'Це лог на момент виклику функції multiply'
//   multiply(); // 'Це лог на момент виклику функції multiply'
//   multiply(); // 'Це лог на момент виклику функції multiply'

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }

//   // 2. Передача аргументів
//   multiply(2, 3, 5); // Результат множення дорівнює 30
//   multiply(4, 8, 12); // Результат множення дорівнює 384
//   multiply(17, 6, 25); // Результат множення дорівнює 2550

// function multiply(x, y, z) {
//     console.log("Код до return виконується звичайним чином");

//     // Повертаємо результат виразу множення
//     return x * y * z;

//     console.log("Цей лог ніколи не виконається, він стоїть після return");
//   }

//   // Результат роботи функції можна зберегти у змінну
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30

//   result = multiply(4, 8, 12);
//   console.log(result); // 384

//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }

//   console.log("Лог до виклику функції multiply");
//   multiply(2, 3, 5); // Результат множення дорівнює 30
//   console.log("Лог після виклику функції multiply");

//   // Послідовність логів в консолі
//   // "Лог до виклику функції multiply"
//   // "Результат множення дорівнює 30"
//   // "Лог після виклику функції multiply"

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }

//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//       total *= argument;
//     }

//     return total;
//   }

//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }

//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// function withdraw(amount, balance) {
//     // Якщо умова виконується, викликається console.log
//     // і вихід із функції. Код після тіла if не виконається.
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//       return;
//     }

//     // Якщо умова першого if не виконалась, його тіло пропускається
//     // та інтерпретатор доходе до другого if.
//     // Якщо умова виконується, викликається console.log і вихід із функції.
//     // Код, що знаходиться після тіла if, не виконається.
//     if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//       return;
//     }

//     // Якщо жоден із попередніх if не виконався,
//     // інтерпретатор доходить до цього коду і виконує його.
//     console.log("Операція зняття коштів проведена");
//   }

//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена"

// // ❌ Помилка! Не працює виклик до оголошення
// // multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// область видимості
// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// function foo() {
//     const a = 20;
//     console.log(a); // 20

//     for (let i = 0; i < 5; i++) {
//       console.log(a); // 20

//       if (i === 2) {
//         console.log(a); // 20
//       }
//     }
//   }

//   // ❌ Помилка! Змінна a - недоступна у глобальній області видимості
//   console.log(a);

//   for (let i = 0; i < 3; i++) {
//     // ❌ Помилка! Змінна a - недоступна в цій області видимості
//     console.log(a);
//   }

// for (let i = 0; i < 5; i++) {
//     const a = 20;
//     console.log(a); // 20

//     if (i === 2) {
//       const b = 30;
//       console.log(a); // 20
//       console.log(b); // 30
//     }

//     if (i === 3) {
//       console.log(a); // 20

//       // ❌ Помилка! Змінна b - недоступна в цій області видимості
//       console.log(b);
//     }
//   }

// function fnA() {
//     console.log("Лог всередині функції fnA до виклику fnB");
//     fnB();
//     console.log("Лог всередині функції fnA після виклику fnB");
//   }

//   function fnB() {
//     console.log("Лог всередині функції fnB");
//   }

//   console.log("Лог до виклику fnA");
//   fnA();
//   console.log("Лог після виклику fnA");

//   // "Лог до виклику fnA"
//   // "Лог всередині функції fnA до виклику fnB"
//   // "Лог всередині функції fnB"
//   // "Лог всередині функції fnA після виклику fnB"
//   // "Лог після виклику fnA"

// function bar() {
//     console.log("bar");
//   }

//   function baz() {
//     console.log("baz");
//   }

//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }

//   foo();

/**
  |============================
  | Дз модуль 2
  |============================
*/

// 1 завдання

// function checkAge(age) {

//   if (age >= 18) { // Change this line

//     return "You are an adult";
//   }

//   return "You are a minor";

// }
// console.log(checkAge(8))

// checkAge(20)
// checkAge(8)
// checkAge(14)
// checkAge(38)

// 2 завдання
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";

//   // Change code above this line
// }
// console.log(checkPassword("jqueryismyjam"))

// checkPassword("mangohackzor")
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// 3 завдання
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// console.log(checkStorage(70, 0))
// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(70, 0)
// checkStorage(200, 20)
// checkStorage(200, 250)
// checkStorage(150, 0)

// 4 завдання
// const fruits = ["apple", "plum", "pear", "orange"]
// console.log(fruits)

// 5 завдання
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[0 + 1];
// const lastElement = fruits[fruits.length - 1];

// console.log(secondElement)

// 6 завдання
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[fruits.length - 1] = "banana";
// console.log(fruits)

// 7 завдання
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length
// console.log(fruitsArrayLength)

// 8 завдання
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement)

// 9 завдання
// function getExtremeElements(array) {
//   // Change code below this line
//   const arrayLength =  [array[0], array[array.length - 1]];
//   return arrayLength

//   // Change code above this line
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

// 10 завдання
// function splitMessage(message, delimiter) {
//   let words
//   // Change code below this line
//   // console.log(message.split(delimiter));
//   words === message.split(delimiter)
//   // Change code above this line

//   return words;

// }

// splitMessage("Mango hurries to the train", " ")
// splitMessage("Mango", "")
// splitMessage("best_for_week", "_")

// 11 завдання
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

// return message.split(" ").length * pricePerWord
//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20))
// calculateEngravingPrice("JavaScript is in my blood", 10)
// calculateEngravingPrice("JavaScript is in my blood", 20)
// calculateEngravingPrice("Web-development is creative work", 40)
// calculateEngravingPrice("Web-development is creative work", 20)

// 12 завдання
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// makeStringFromArray(["M", "a", "n", "g", "o"], "")
// makeStringFromArray(["top", "picks", "for", "you"], "_")

// 13 завдання
// function slugify(title) {
//   // Change code below this line

// return title.toLowerCase().split(' ').join('-')

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"))
// slugify("Arrays for begginers")
// slugify("English for developer")
// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// // 14 завдання
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice( -3);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// 15 завдання
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients)

// 16 завдання
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

// const result = firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray)
// return result
//   // Change code above this line
// }
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// 17 завдання
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18 завдання
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(3));

// 19 завдання
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < 4; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20 завдання
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1)
// total += order[i]
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// console.log(calculateTotalPrice())

// 21 завдання
// function findLongestWord(string) {
//   // Change code below this line
// return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);

//   // Change code above this line
// }
// // console.log(longWord)
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// 22 завдання
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34))
// createArrayOfNumbers(1, 3)

// 23 завдання
// function filterArray(numbers, value) {
//   // Change code below this line
// const bigestNumber = [];
// for (const item of numbers) {
//   if (item > value) {
//     bigestNumber.push(item)
//   }
// }
// console.log(bigestNumber)
//  // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 20)

// 24 завдання
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"))
// checkFruit("mandarin")
// checkFruit("plum") 

// 25 завдання
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const array3 = []
// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     array3.push(array1[i])
//   }
// }
// return array3
//  // Change code above this line
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])

// 26 завдання
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line


//   for (const item of order) {
//     total += item
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// calculateTotalPrice([412, 371, 94, 63, 176])

// 27 завдання
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

  
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20))
// filterArray([12, 24, 8, 41, 76], 20)

// 28 завдання
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(e)

// 29 завдання
// function getEvenNumbers(start, end) {
//   // Change code below this line

// const number = [];
// for (let i = start; i <= end; i +=1) {
//   if (i % 2 === 0) {
//     number.push(i)
//   }
// }
// return number
//    // Change code above this line
//  }
// console.log(getEvenNumbers(3, 11))
//  getEvenNumbers(3, 11)

// 30 завдання
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
    
//   }
// }
// console.log(number)

// 31 завдання
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i
//     }
//   }

// }
// console.log(findNumber(16, 35, 7))
// findNumber(2, 6, 5)
// findNumber(16, 35, 7)

// 32 завдання
// function includes(array, value) {
//   // Change code below this line
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === value) {
//     return true;
//   }
// }
// return false
//   // Change code above this line
// }
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"))
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// includes(["apple", "plum", "pear", "orange"], "plum")