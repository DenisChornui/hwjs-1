/**
  |============================
  | Колбекі та стрилочні функції
  |============================
*/
// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
//   }
  
//   // Викликаємо функцію greet і виводимо результат у консоль
//   console.log(greet("Манго")); // Ласкаво просимо Манго.
  
//   // Виводимо функцію greet у консоль, не викликаючи її
//   console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// // Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);

// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   // Передаємо інлайн функцію greet у якості колбека
//   registerGuest("Манго", function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   });
  
//   // Передаємо інлайн функцію notify у якості колбека
//   registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });

// function processCall(recipient) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//       // Логіка активації автовідповідача
//     } else {
//       console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//       // Логіка прийняття дзвінка
//     }
//   }
  
//   processCall("Манго");

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
//   }

// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   }
  
//   repeatLog(5);

// function printValue(value) {
//     console.log(value);
//   }
  
//   function prettyPrint(value) {
//     console.log("Logging value: ", value);
//   }
  
//   function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   }
  
//   // Передаємо printValue як callback-функцію
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2
  
//   // Передаємо prettyPrint як callback-функцію
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
//   // Те саме стрілочною функцією
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

/**
  |============================
  | Перебираючі методи масиву
  |============================
*/

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   dirtyMultiply(numbers, 2);
//   // Відбулася мутація вихідних даних - масиву numbers
//   console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//     const newArray = [];
  
//     array.forEach(element => {
//       newArray.push(element * value);
//     });
  
//     return newArray;
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);
  
//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
  
//   const names = students.map(student => student.name);
//   console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
//   ];
  
//   students.map(student => student.courses);
//   // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
  
//   students.flatMap(student => student.courses);
//   // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
  
//   colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
//   colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
//   colorPickerOptions.find(option => option.label === "white"); // undefined

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
  
//   colorPickerOptions.findIndex(option => option.label === "blue"); // 2
//   colorPickerOptions.findIndex(option => option.label === "pink"); // 3
//   colorPickerOptions.findIndex(option => option.label === "white"); // -1

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
  
//   console.log(total); // 32

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
  
//   // Назва акумулятора може бути довільною, це просто параметр функції
//   const totalScore = students.reduce((total, student) => {
//     return total + student.score;
//   }, 0);
  
//   const averageScore = totalScore / students.length;

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
//   // Пройдемо по всіх елементах колекції і додамо значення властивості likes
//   // до акумулятора, початкове значення якого вкажемо 0.
//   const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  
//   console.log(likes); // 32
  
//   // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
//   // для підрахунку лайків з колекції
//   const countLikes = tweets => {
//     return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
//   };
  
//   console.log(countLikes(tweets)); // 32

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
//   // Пройдемо по всіх елементах колекції і додамо значення властивості tags
//   // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
//   // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
//   const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
  
//     return allTags;
//   }, []);
  
//   console.log(tags);
  
//   // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
//   // для збирання тегів з колекції
//   const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);
  
//       return allTags;
//     }, []);
  
//   console.log(getTags(tweets));

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
//   const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);
  
//       return allTags;
//     }, []);
  
//   const tags = getTags(tweets);
  
//   // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//   // Це стандартна практика, якщо callback-функція досить велика.
  
//   // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//   // то створюємо її і записуємо їй значення 0.
//   // В іншому випадку збільшуємо значення на 1.
//   const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }
  
//     acc[tag] += 1;
  
//     return acc;
//   };
  
//   // Початкове значення акумулятора - це порожній об'єкт {}
//   const countTags = tags => tags.reduce(getTagStats, {});
  
//   const tagCount = countTags(tags);
//   console.log(tagCount);

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//   ];
  
//   const inAscendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//   );
  
//   const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//   );
  
//   const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
//   );

//   console.log(inAlphabeticalOrder)


// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//     { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//     { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
//   ];
// // const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// // const names = sortedByAscendingScore.map(student => student.name);

// // console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']


// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']