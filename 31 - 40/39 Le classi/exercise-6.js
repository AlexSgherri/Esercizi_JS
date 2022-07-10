class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figura) {
    if (figura instanceof Square) {
      return Math.pow(square.side, 2);
    }
    if (figura instanceof Rectangle) {
      return rectangle.width * rectangle.height;
    }
    if (figura instanceof Circle) {
      return (Math.pow(circle.radius, 2) * 3.14);
    }
    return ("non è una figura riconosciuta");
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));