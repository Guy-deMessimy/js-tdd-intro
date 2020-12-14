const assert = require('assert');
const capitalizeFirstLetters = require ('../capitalizeFirstLetters');

describe('toto', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transform i am learning TDD correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });

    it('works with a a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
      });
});
