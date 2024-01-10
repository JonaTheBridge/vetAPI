/* eslint-disable no-import-assign */
import parseRomaneNumbers from './romaneNumbers.js';
// import * as parseators from './parseators.js';

// function decimalToRomanMock({ splittedNumber, romanLetters }) {
//   if (splittedNumber[0] === '1') {
//     return romanLetters[0];
//   }

//   return '?';
// }

// function romanToDecimalMock({ splittedNumber }) {
//   if (splittedNumber[0] === 'I') {
//     return 1;
//   }

//   return '?';
// }

// beforeAll(() => {
//   parseators.decimalToRoman = jest.fn().mockImplementation(decimalToRomanMock);
//   parseators.romanToDecimal = jest.fn().mockImplementation(romanToDecimalMock);
// });
// beforeEach(() => {});
// afterEach(() => {});
// afterAll(() => {});

describe('validation errors', () => {
  // test.skip('Without named params', () => {
  // test.only('Without named params', () => {
  test('Without named params', () => {
    try {
      parseRomaneNumbers(1);
    } catch (e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.code).toBe(1);
      expect(parsedMsg.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });

  test('With numberAsString prop but is not a string', () => {
    try {
      parseRomaneNumbers({ numberAsString: 1 });
    } catch (e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.code).toBe(2);
      expect(parsedMsg.msg).toBe('The numberAsString property must be a string');
    }
  });
});

describe('execution tests', () => {
  test('1 to I', () => {
    const romanNumber = parseRomaneNumbers({ numberAsString: '1' });
    expect(parseators.decimalToRoman).toHaveBeenCalled();
    const namedParams = {
      splittedNumber: ['1'],
      romanLetters: ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
    };
    expect(parseators.decimalToRoman).toHaveBeenCalledWith(namedParams);
    expect(romanNumber).toBe('I');
  });

  test('I to 1', () => {
    const decimalNumber = parseRomaneNumbers({ numberAsString: 'I' });
    expect(decimalNumber).toBe(1);
  });
});
