/**
  |============================
  | Об'екти
  |============================
*/
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
//   console.log(book)

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
//   console.log(user)


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book.title;
//   console.log(bookTitle); // 'The Last Kingdom'
  
//   const bookGenres = book.genres;
//   console.log(bookGenres); // ['historical prose', 'adventurs']
  
//   const bookPrice = book.price;
//   console.log(bookPrice); // undefined

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
// //   const location = user.location;
// //   console.log(location); // Об'єкт location
  
// //   const country = user.location.country;
// //   console.log(country); // 'Jamaica'
// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book["title"];
//   console.log(bookTitle); // 'The Last Kingdom'
  
//   const bookGenres = book["genres"];
//   console.log(bookGenres); // ['historical prose', 'adventurs']
  
//   const propKey = "author";
//   const bookAuthor = book[propKey];
//   console.log(bookAuthor); // 'Bernard Cornwell'

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");
  
//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];
  
//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // 'en'
//   console.log(book.translations); // ['ua', 'ru']

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // 'Генрі Сибола'

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//       console.log("Цей метод буде додавати нову книгу у властивість books");
//     },
//   };
  
//   // Виклики методів
//   bookShelf.getBooks();
//   bookShelf.addBook("Нова книга");

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   // Перед крапкою знаходиться об'єкт bookShelf,
//   // тому, викликаючи метод, this буде зберігати посилання на нього.
//   bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
  
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

/**
  |============================
  | Перебирання циклу
  |============================
*/
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }
  
//     // Якщо це невласна властивість - нічого не робимо
//   }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };
  
//   const values = Object.values(goods); // [6, 3, 4, 7]
  
//   let total = 0;
  
//   for (const value of values) {
//     total += value;
//   }
  
//   console.log(total); // 20

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
  
//   const entries = Object.entries(book);
//   console.log(entries);
//   // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
//   ];
//   for (const book of books) {
//     // Об'єкт книги
//     console.log(book);
//     // Назва
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

//   const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

/**
  |============================
  | Спреди
  |============================
*/
// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// function multiply(...args) {
//     console.log(args); // масив усіх аргументів
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author, isPublic, rating, coverImage } = book;
//   console.log(coverImage); // undefined
  
//   const accessType = isPublic ? "публічному" : "закритому";
//   const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
//   console.log(message)

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };
  
//   // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;
  
//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100] 

/**
  |============================
  | HW 3
  |============================
*/

// 1завдання
// const apartment = {
//   imgUrl : "https://via.placeholder.com/640x480",
//   descr : "Spacious apartment in the city center",
//   rating : 4,
//   price : 2153,
//   tags : ["premium", "promoted", "top"]
// };
// console.log(apartment)

// 2 завдання
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//   }
// };
// console.log(apartment)

// 3 завдання
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating)
// console.log(aptDescr)
// console.log(aptPrice)
// console.log(aptTags)

// 4 завдання
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line
// console.log(ownerName)
// console.log(ownerPhone)
// console.log(ownerEmail)
// console.log(numberOfTags)
// console.log(firstTag)
// console.log(lastTag)

// 5 завдання
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line
// console.log(aptRating)
// console.log(aptDescr)
// console.log(aptPrice)
// console.log(aptTags)

// 6 завдання
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment)

// 7 завдання
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location 
// apartment.location = {}
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment)

// 8 завдання
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   // Change code above this line
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product.image)

// 9 завдання
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };
// console.log(credentials.email)

// 10 завдання
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys)
// console.log(values)

// 11 завдання
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
// console.log(keys)

// 12 завдання
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object)
//   // Change code below this line
// for (let key of keys) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }

// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// 13 завдання
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
  
//   values.push(apartment[key]);

// }
// console.log(values)

// 14 завдання
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object)

//   return propCount = keys.length;
//   // Change code above this line
// }

// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// 15 завдання
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys)
// console.log(values)

// 16 завдання
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries)
//   // Change code above this line
//   for (const value of values) {
//     totalSalary += value
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// countTotalSalary({})
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

// 17 завдання
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors)
// console.log(rgbColors)

// 18 завдання
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const iteam of products) {
//   if (iteam.name === productName)
//   return iteam.price
// }

// return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Engine"))
// getProductPrice("Scanner")

// 19 завдання
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propItems = []
// for (const product of products) {
//   if (product.hasOwnProperty(propName)) {
//     propItems.push(product[propName])
//   }
// }
// return propItems

//   // Change code above this line
// }
// getAllPropValues("quantity")
// getAllPropValues("price")
// getAllPropValues("name")
// getAllPropValues("category")
// console.log(getAllPropValues("quantity"))

// 20 завдання
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0
// for (const product of products) {
//   if (product.name === productName) {
//     totalPrice = (product.price * product.quantity)
//   }
// }
// return totalPrice

//   // Change code above this line
// }
// calculateTotalPrice("Droid")
// calculateTotalPrice("Radar")
// calculateTotalPrice("Blaster")
// console.log(calculateTotalPrice("Blaster"))

// 21 завдання
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const {  yesterday, today, tomorrow} = highTemperatures
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature)

// 22 завдання
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { 
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23 завдання
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature)

// 24 завдання
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex , rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)

// 25 завдання
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//   high: highToday,
//   low: lowToday,
//   icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   }} = forecast

// 26 завдання
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh}, tomorrow: { low: tomorrowLow, high: tomorrowHigh} } = forecast

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }))

// 27 завдання
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(worstScore)

// 28 завдання
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores)
// console.log(bestScore)
// console.log(worstScore)

// 29 завдання
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings)

// 30 завдання
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const newMakeTask = {category, priority, ...data, completed}
// return newMakeTask
//   // Change code above this line
// }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))

// 31 завдання
// Change code below this line
// function add(...args) {
//   let sum = 0
//   // Change code above this line
//   for (const item of args) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(add(12, 4, 11, 48))
// add(12, 4, 11, 48)

// 32 завдання
// Change code below this line
// function addOverNum(firstItem, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstItem < arg) {
//       total += arg;
//       }
//   }

//   return total;
//   // Change code above this line
// }

// addOverNum(10, 12, 4, 11, 48, 10, 8)
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))

// 33 завдання
// Change code below this line
// function findMatches(firstArr, ...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (firstArr.includes(arg)) {
//     matches.push(arg)
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)

// 34 завдання
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// bookShelf.getBooks()
// bookShelf.addBook("Haze")
// bookShelf.removeBook("Red sunset")
// bookShelf.updateBook("Sands of dune", "Dune")

// console.log(bookShelf.updateBook("Sands of dune", "Dune"))

// // 35 завдання
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const idx = this.books.indexOf(oldName);
// this.books.splice(idx, 1, newName)


//     // Change code above this line
//     return this.books
    
//   },
  
// };

// bookShelf.updateBook("The last kingdom", "Dune")
// bookShelf.updateBook("Haze", "Dungeon chronicles")
// console.log(bookShelf.updateBook("The last kingdom", "Dune"))
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))

// 36 завдання
// const atTheOldToad = {
//   // Change code below this line
//   potions: []


//   // Change code above this line
// };
// console.log(atTheOldToad)

// 37 завдання
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
  
// }
//   // Change code above this line
  
// };
// console.log(atTheOldToad.getPotions())
// atTheOldToad.getPotions()

// 38 завдання
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

// this.potions.push(potionName)

//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Power potion")
// console.log(atTheOldToad.potions)

// 39 завдання
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1)
//     // Change code above this line
//     return this.potions
//   },
// };
// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad.potions)

// 40 завдання
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(oldName), 1, newName);
// console.log(this.potions)
// return this.potions

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")
// console.log(atTheOldToad)

// 41 завдання
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//   // Change code above this line
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         return potion.name = newName
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`
//   },
// };

// atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
