const validateDvaNumber = require('./index');

test('throws if the DVA card number is not provided', () => {
  expect(() => validateDvaNumber()).toThrowError();
});

test('throws if the DVA card number is not a string', () => {
  expect(() => validateDvaNumber(123)).toThrowError();
});

[
  "B123456",
  "B12345",
  "B1234",
  "B123",
  "B12",
  "B1",
  " 123456",
  " 12345",
  " 1234",
  " 123",
  " 12",
  " 1",
  "BC12345",
  "BC1234",
  "BC123",
  "BC12",
  "BC1",
  "BCD1234",
  "BCD123",
  "BCD12",
  "BCD1",
].forEach((cardNumber) => {
  ["N","V","Q","S","W","T"].forEach(stateId => {
    test(`returns true for valid DVA card number ${stateId}${cardNumber}`, () => {
      expect(validateDvaNumber(`${stateId}${cardNumber}`)).toEqual(true);
    });

    test(`returns true for valid DVA card number ${stateId}${cardNumber}Z`, () => {
      expect(validateDvaNumber(`${stateId}${cardNumber}Z`)).toEqual(true);
    });

    // should not accept lower case
    test(`returns false for invalid DVA card number ${stateId.toLowerCase()}${cardNumber.toLowerCase()}z`, () => {
      expect(validateDvaNumber(`${stateId}${cardNumber}Z`.toLowerCase())).toEqual(false);
    });
  });

  // state ID is not one of "N","V","Q","S","W","T"
  "ABCDEFGHIJKLMOPRUXYZ0123456789".split("").forEach(stateId => {
    test(`returns false for valid DVA card number ${stateId}${cardNumber}`, () => {
      expect(validateDvaNumber(`${stateId}${cardNumber}`)).toEqual(false);
    });

    test(`returns false for valid DVA card number ${stateId}${cardNumber}Z`, () => {
      expect(validateDvaNumber(`${stateId}${cardNumber}Z`)).toEqual(false);
    });
  });
});

[
  // dependency indicator is a digit
  "NB1234560",
  // too many chars
  "NB123456ZZ",
  // not enough chars
  "N",
  "1",
  "NB",
  "N1",
  "1A",
  // wrong number of digits in numeric field
  "NB1234567",
  "NB",
  "N 1234567",
  "N ",
  "NBC123456",
  "NBC",
  "NBCD12345",
  "NBCD",
  // war code has digit
  "N1123456",
  "N11",
  "N1C12345",
  "N1C1234",
  "N1C123",
  "N1C12",
  "N1C1",
  "N1CD1234",
  "N1CD123",
  "N1CD12",
  "N1CD1",
  "NB1D1234",
  "NB1D123",
  "NB1D12",
  "NB1D1"
].forEach((cardNumber) => {
  test(`returns false for invalid DVA card number ${cardNumber}`, () => {
    expect(validateDvaNumber(cardNumber)).toEqual(false);
  });

  test(`returns false for invalid DVA card number ${cardNumber}Z`, () => {
    expect(validateDvaNumber(cardNumber + "Z")).toEqual(false);
  });
});
