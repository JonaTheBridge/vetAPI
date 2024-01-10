/* eslint-disable no-import-assign */
import romanParseator from './romaneNumbers.js';
import * as parseators from './parseators.js';

function decimalToRomanMock({ splittedNumber }) {
  const joinedNumber = splittedNumber.join('');
  if (joinedNumber === '1') {
    return 'I';
  }

  if (joinedNumber === '2') {
    return 'II';
  }

  if (joinedNumber === '3') {
    return 'III';
  }

  return '?';
}

function romanToDecimalMock({ splittedNumber }) {
  const joinedNumber = splittedNumber.join('');
  if (joinedNumber === 'I') {
    return 1;
  }

  if (joinedNumber === 'IV') {
    return 4;
  }

  return '?';
}

beforeAll(() => {
  parseators.decimalToRoman = jest.fn().mockImplementation(decimalToRomanMock);
  parseators.romanToDecimal = jest.fn().mockImplementation(romanToDecimalMock);
});

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

describe('validation params tests', () => {
  test('The arg is undefined', () => {
    try {
      romanParseator();
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(0);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });

  test('The arg is an empty object', () => {
    try {
      romanParseator({});
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(1);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });

  test('The arg is an object but numberAsString is a number', () => {
    try {
      romanParseator({ numberAsString: 1 });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(2);
      expect(parsedMessage.msg).toBe('The numberAsString property must be a string');
    }
  });
});

describe('roman to decimal functionality', () => {
  test('I pass "I" and returns 1', () => {
    const decimal = romanParseator({ numberAsString: 'I' });
    expect(decimal).toBe(1);
  });

  test('I pass "IV" and returns 4', () => {
    const decimal = romanParseator({ numberAsString: 'IV' });
    expect(decimal).toBe(4);
  });
});

describe('decimal to roman functionality', () => {
  test('I pass 1 and returns "I"', () => {
    const roman = romanParseator({ numberAsString: '1' });
    expect(roman).toBe('I');
  });

  test('I pass 2 and returns "II"', () => {
    const roman = romanParseator({ numberAsString: '2' });
    expect(roman).toBe('II');
  });

  test('I pass 3 and returns "III"', () => {
    const roman = romanParseator({ numberAsString: '3' });
    expect(parseators.decimalToRoman).toHaveBeenCalled();
    const namedParams = {
      splittedNumber: ['3'],
      romanLetters,
    };
    expect(parseators.decimalToRoman).toHaveBeenCalledWith(namedParams);
    expect(roman).toBe('III');
  });
});
