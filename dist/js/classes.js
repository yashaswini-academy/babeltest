"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ECMAScript6
// Classes
var Shape =
/*#__PURE__*/
function () {
  function Shape(width, height) {
    _classCallCheck(this, Shape);

    this._width = width;
    this._height = height;
  }

  _createClass(Shape, [{
    key: "getArea",
    value: function getArea() {
      return this._width * this._height;
    }
  }, {
    key: "getPerimeter",
    value: function getPerimeter() {
      return this._width + this._height;
    }
  }, {
    key: "width",
    set: function set(width) {
      if (width >= 10) {
        this._width = width;
      } else {
        console.log("Width should be greater than equal to 10");
      }
    },
    get: function get() {
      return this._width;
    }
  }], [{
    key: "getShapeObj",
    value: function getShapeObj() {
      if (arguments.length == 1) {
        return 'square';
      } else if (arguments.length == 2) {
        return 'rectangle';
      }
    }
  }]);

  return Shape;
}(); // let shape = new Shape(1, 2);
// shape.width = 5;
// console.log( shape.getArea() );
// console.log( shape.getPerimeter() );
// console.log( Shape.getShapeObj(1, 2) );


exports.Shape = Shape;
//# sourceMappingURL=classes.js.map
