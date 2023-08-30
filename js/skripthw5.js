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

/**
  |============================
  | 5-10 заняття Прототипи та класи
  |============================
*/

// Об'єктно-орієнтоване програмування

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;

// };

// getWage(baseSalary, overtime, rate);

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();
// console.log(employee.getWage())

// Прототипи обьєкта

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// Класи

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

/**
  |============================
  | HW 5
  |============================
*/
// taska 1
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// pizzaPalace.order("Smoked")
// console.log(pizzaPalace.order("Smoked"))
// pizzaPalace.order("Big Mike")
// console.log(pizzaPalace.order("Big Mike"))

// 2 taska
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// 3 taska
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// historyService.getOrdersByEmail("solomon@topmail.net")
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"))
// historyService.getOrdersByEmail("artemis@coldmail.net")
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"))

// 4 taska
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// parent.hasOwnProperty("surname")
// console.log(parent.hasOwnProperty("surname"))

// 5 taska
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// parent.hasOwnProperty("heritage")
// console.log(parent.hasOwnProperty("heritage"))
// ancestor.hasOwnProperty("heritage")
// console.log(ancestor.hasOwnProperty("heritage"))
// ancestor.heritage
// console.log(ancestor.heritage)

// 6 taska
// class Car {}

// const Bmw = new Car;
// console.log(Bmw);

// const Audi = new Car;
// console.log(Audi);
// console.log(Car)

// 7 taska
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const Audi = new Car("Audi", "Q3", 36000)
// const Bmw = new Car("BMW", "X5", 58900)
// const Nissan = new Car("Nissan","Murano", 31700)
// console.log(Audi)
// console.log(Bmw)
// console.log(Nissan)

// 8 taska
// class Car {
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const Audi = new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// const Bmw = new Car({ brand: "BMW", model: "X5", price: 58900 })
// const Nissan = new Car({ brand: "Audi", model: "Q3", price: 36000 })
// console.log(Audi)
// console.log(Bmw)
// console.log(Nissan)


// 9 taska
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
// return this.price;
//   }
//   changePrice(newPrice) {
// this.price = newPrice;
//   }


//   // Change code above this line
// }


// 10 taska
// class Storage {
//   constructor ({item}) {
//     this.item=item;
//   }
//   getItems() {
// return this.item;
//   }
//   addItem(newItem){
//     this.item.push(newItem);
//   }
//   removeItem(itemToRemove){
//     this.item.splice(this.item.indexOf(itemToRemove),1)
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// 11 taska

// class StringBuilder {
//   constructor(initialValue ) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// 12 taska
// class Car {
//   // Change code below this line
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand() {
//   return this.#brand;
// }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }


// 13 taska
// class Storage {
//   // Change code below this line
// #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// 14 taska
// class StringBuilder {
//   // Change code below this line
// #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// 15 taska
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
//   get brand() {
//   return this.#brand
// }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// 16 taska
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {;
//     this.#price = newPrice;}
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// 17 taska
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice (price) {
//   if (price > Car.#MAX_PRICE) {
//     return "Error! Price exceeds the maximum"
//      }
//   else {
//   return "Success! Price is within acceptable limits"
//   } 
// }
// // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// 18 taska
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic", SUPERUSER: "superuser"
//   }
// }


// 19 taska
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// constructor ({email, accessLevel}) {
//   super(email);
//   this.accessLevel = accessLevel
// }
// }


// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// 20 taska
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

~Node
const message = `node is amazing`
console.log(message)
