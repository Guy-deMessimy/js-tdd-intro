const assert = require('assert');

function capitalizeFirstLetters (input) {
   return input.length > 0
   ? input.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
   : ""
    };
//w word/non-word character
//S non-space character
//* occurence indicators
//^ start-of-line 

module.exports = capitalizeFirstLetters;