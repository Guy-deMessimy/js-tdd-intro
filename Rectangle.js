const assert = require('assert');

class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    isSquare () {
        return this.a === this.b
    };
    getArea () {
        return this.a * this.b;
    };
    getPerimeter () {
        return  (2 * (this.a + this.b))
    };
}

module.exports = Rectangle;