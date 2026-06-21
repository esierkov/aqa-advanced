const users = [
  {
    name: "Іван",
    email: "ivan@gmail.com",
    age: 25,
  },
  {
    name: "Марія",
    email: "maria@gmail.com",
    age: 22,
  },
  {
    name: "Олег",
    email: "oleg@gmail.com",
    age: 30,
  },
];

for (const { name, email, age } of users) {
  console.log("Ім'я:", name);
  console.log("Email:", email);
  console.log("Вік:", age);
  console.log();
}
