const person = {
    firstName: "Іван",
    lastName: "Петренко",
    age: 25
};

person.email = "ivan.petrenko@gmail.com";

delete person.age;

console.log(person);