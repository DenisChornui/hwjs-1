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
function getExtremeElements(array) {
  // Change code below this line
  const arrayLength =  [array[0], array[array.length - 1]];
  return arrayLength

  // Change code above this line
}
console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
getExtremeElements([1, 2, 3, 4, 5])
getExtremeElements(["Earth", "Mars", "Venus"])
getExtremeElements(["apple", "peach", "pear", "banana"])