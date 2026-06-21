function getRectangleAreaDeclaration(width, height) {
  return width * height;
}

const area1 = getRectangleAreaDeclaration(5, 10);
console.log("Function Declaration:", area1);

const getRectangleAreaExpression = function (width, height) {
  return width * height;
};

const area2 = getRectangleAreaExpression(5, 10);
console.log("Function Expression:", area2);

const getRectangleAreaArrow = (width, height) => {
  return width * height;
};

const area3 = getRectangleAreaArrow(5, 10);
console.log("Arrow Function:", area3);
