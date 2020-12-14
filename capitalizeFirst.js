const assert = require('assert');

function capitalizeFirst(input) {
    let output = '';
    for (let i=0; i < input.length; i++) {
        if (i === 0) {
            output += input[0].toUpperCase();
        } else {
            output += input[i];
        }
    }
    return output;
}

assert.strictEqual(typeof capitalizeFirst, 'function');
assert.strictEqual(capitalizeFirst.length, 1);
assert.strictEqual(capitalizeFirst('javascript'), 'Javascript');
assert.strictEqual(capitalizeFirst('z'), 'Z');
assert.strictEqual(capitalizeFirst(''), '');

