const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('RectangleCalculation', () => {
    it('is square', () => {
        const square = new Rectangle(10, 10).isSquare();
        assert.strictEqual(square, true)
    });
    it('is not square', () => {
        const square = new Rectangle(10, 13).isSquare();
        assert.strictEqual(!square, true)
    })
    it('calculation of area', () => {
        const area = new Rectangle(13, 7).getArea();
        assert.strictEqual(area, 91)
        });
    it('calculation of perimeter', () => {
        const perimeter = new Rectangle(13, 7).getPerimeter();
        assert.strictEqual(perimeter, 40) 
        });
});



