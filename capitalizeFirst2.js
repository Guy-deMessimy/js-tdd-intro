const assert = require("assert");

function capitalizeFirstLetters(input) {
    if (input.length > 0) {
        return input
            .split(" ")
            .map(function(word) {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ");
    } else {
        return "";
    }
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms string correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');