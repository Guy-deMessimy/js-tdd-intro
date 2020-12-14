function capitalizeFirstLetters(input) {
    const words = input.split(" ");
    return input.length > 0
      ? words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ")
      : "";
  }
  
  const assert = require("assert");
  assert.strictEqual(typeof capitalizeFirstLetters, "function");
  assert.strictEqual(capitalizeFirstLetters("a"), "A");
  assert.strictEqual(capitalizeFirstLetters("test"), "Test");
  assert.strictEqual(
    capitalizeFirstLetters("all you need is code"),
    "All You Need Is Code"
  );
  assert.strictEqual(capitalizeFirstLetters(""), "");