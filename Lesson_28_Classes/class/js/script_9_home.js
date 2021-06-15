// const person1 = { name: "Vitia",
// lastName: "Klubniczka"
// };

// const person2 = { name: "Vitia",
// lastName: "Klubniczka"
// };

//Class

class Person {
  constructor() {
    this.name = "Vitia";
    this.surname = "Klubniczka";
  }
}
const person1 = new Person();
console.log(person1);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.surname = "Klubniczka";
  }
}
