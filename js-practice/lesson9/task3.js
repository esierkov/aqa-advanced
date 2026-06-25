const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Іван Петренко",
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
