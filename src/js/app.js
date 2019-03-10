// ECMAScript6

import { Shape } from "./classes";


let shape = new Shape(1, 2);
shape.width = 5;
console.log( shape.getArea() );
console.log( shape.getPerimeter() );

console.log( Shape.getShapeObj(1, 2) );
