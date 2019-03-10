// ECMAScript6

// Classes

export class Shape {

  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width (width) {
    if (width >= 10) {
      this._width = width;
    } else {
      console.log("Width should be greater than equal to 10");
    }
  }
  get width () { return this._width }

  getArea() {
    return this._width * this._height;
  }

  getPerimeter() {
    return this._width + this._height;
  }

  static getShapeObj(...args) {
    if (args.length == 1) {
      return 'square';
    } else if (args.length == 2) {
      return 'rectangle';
    }
  }
}


// let shape = new Shape(1, 2);
// shape.width = 5;
// console.log( shape.getArea() );
// console.log( shape.getPerimeter() );

// console.log( Shape.getShapeObj(1, 2) );
