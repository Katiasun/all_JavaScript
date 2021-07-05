// document.getElementById("someId"); //znalezc po id
// document.getElementsByClassName("some_class"); // znalezc po klasu
// document.getElementsByTagName("button");
// document.querySelector("p>a img"); //wernet odin element
// document.querySelectorAll("p>a img"); //вернет все жлементы, всю коллекцию элементов

// const buttons = document.getElementsByTagName("button");
// console.log(Array.from(buttons)); //Array to jest klas

const button = document.getElementById("hide_text");
const p = document.querySelector("body>p");

// button.onclick = function () {
//   p.style.display = "none";
// };//nie wykorzystujemy poowiewaz tylko mozna dodac jedno sobytije

// button.classList.add("my_button"); //dodajemy klas do button
button.addEventListener("click", () => {
  //   if (p.style.display === "none") {
  //     p.style.display = "block";
  //   } else {
  //     p.style.display = "none";
  //   }
  p.classList.toggle("hidden");
});
console.log(button);
