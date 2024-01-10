import { decimalToRoman, romanToDecimal } from './parseators.js';

function romanParseator(params) {
  if (!params) {
    const myError = {
      code: 0,
      msg: 'The argument must be an object that contains the numberAsString property',
    };

    throw new Error(JSON.stringify(myError));
  }

  const { numberAsString } = params;

  if (!numberAsString) {
    const myError = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };

    throw new Error(JSON.stringify(myError));
  }

  if (typeof numberAsString !== 'string') {
    const myError = {
      code: 2,
      msg: 'The numberAsString property must be a string',
    };

    throw new Error(JSON.stringify(myError));
  }

  const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  const numberAsInteger = parseInt(numberAsString, 10);
  const isRomanString = Number.isNaN(numberAsInteger);

  const splittedNumber = numberAsString.split('');

  if (isRomanString) {
    const decimalNumber = romanToDecimal({ splittedNumber, romanLetters });
    return decimalNumber;
  }

  const romanNumber = decimalToRoman({ splittedNumber, romanLetters });
  return romanNumber;
}

export default romanParseator;

// console.log(romanParseator({numberAsString: 'I'}));
// console.log(romanParseator({numberAsString: 'II'}));
// console.log(romanParseator({numberAsString: 'III'}));
// console.log(romanParseator({numberAsString: 'IV'}));
// console.log(romanParseator({numberAsString: 'V'}));
// console.log(romanParseator({numberAsString: 'VI'}));
// console.log(romanParseator({numberAsString: 'IX'}));
// console.log(romanParseator({numberAsString: 'X'}));
// console.log(romanParseator({numberAsString: 'XI'}));
// console.log(romanParseator({numberAsString: 'XC'}));
// console.log(romanParseator({numberAsString: 'XCIX'}));
// console.log(romanParseator({numberAsString: 'XXXIX'}));
// console.log(romanParseator({numberAsString: 'C'}));
// console.log(romanParseator({numberAsString: 'CMXCIII'}));
// console.log(romanParseator({numberAsString: 'CMXCIV'}));
// console.log(romanParseator({numberAsString: 'CMXCIX'}));
// console.log(romanParseator({numberAsString: 'MMMCMXCIX'}));

// for (let i = 1; i <= 100; i++) {
//   const numberAsString = `${i}`;
//   console.log(romanParseator({numberAsString}));
// }

// console.log(romanParseator({numberAsString: '3845'}));
// console.log(romanParseator({numberAsString: '3999'}));
// max 3999 porque el número romano más alto quee existe es el 1000 === M
// MMM === 3000 pero MMMM !== 4000, y no existe letra para el 5000
