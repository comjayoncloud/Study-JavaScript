class Sqaure {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Sqaure(10, 10);
console.log(square.area());
