// const mango = {
//     username: "Mango",
//     showUsername() {
//       console.log(this);
//       console.log(`My username is: ${this.username}`);
//     },
//   };
  
//   const btn = document.querySelector(".js-btn");
  
//   // ✅ Працює
//   mango.showUsername();
  
//   // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
//   btn.addEventListener("click", mango.showUsername); // не працює
  
//   // ✅ Не забувайте прив'язувати контекст методів об'єкта
//   btn.addEventListener("click", mango.showUsername.bind(mango));

// const handleClick = event => {
//     console.log(event);
//   };
  
//   button.addEventListener("click", handleClick);

// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//   });
  
//   document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
//   });

