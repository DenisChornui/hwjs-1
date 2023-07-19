/**
  |============================
  | Правила визначення THIS
  |============================
*/
// function foo() {
//     console.log(this);
//   }
  
//   foo(); // window без "use strict" і undefined з "use strict"

// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };
  
//   petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'

// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   // Викликаємо у глобальному контексті
//   showThis(); // this in showThis: Window
  
//   const user = {
//     username: "Mango",
//   };
  
//   // Записуємо посилання на функцію у властивість об'єкта
//   // Зверніть увагу, що це не виклик - немає ()
//   user.showContext = showThis;
  
//   // Викликаємо функцію в контексті об'єкта
//   // this буде вказувати на поточний об'єкт, в контексті
//   // якого здійснюється виклик, а не на глобальний об'єкт.
//   user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Буде помилка у виклику функції

// const showThis = () => {
//     console.log("this in showThis: ", this);
//   };
  
//   showThis(); // this in showThis: window
  
//   const user = {
//     username: "Mango",
//   };
//   user.showContext = showThis;
  
//   user.showContext(); // this in showThis: window

// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//       const foo = () => {
//         // Стрілки запам'ятовують контекст під час оголошення
//         // з батьківської області видимості
//         console.log("this in foo: ", this);
//       };
  
//       foo();
//       console.log("this in showThis: ", this);
//     },
//   };
  
//   hotel.showThis();
//   // this in foo: {username: 'Resort hotel', showThis: ƒ}
//   // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };
  
//   greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
//   greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };
  
//   greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
//   greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

// function greet(clientName) {
//     return `${clientName}, ласкаво просимо в «${this.service}».`;
//   }
  
//   const steam = {
//     service: "Steam",
//   };
//   const steamGreeter = greet.bind(steam);
//   steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."
  
//   const gmail = {
//     service: "Gmail",
//   };
//   const gmailGreeter = greet.bind(gmail);
//   gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// // ❌ Було
// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.