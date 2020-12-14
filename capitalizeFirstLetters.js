const assert = require('assert');

function capitalizeFirstLetters (input) {
   return input.length > 0
   ? input.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
   : ""
    };

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms string correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');