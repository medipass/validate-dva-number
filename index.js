'use strict';

module.exports = function (cardNumber) {
  if (!cardNumber || typeof cardNumber !== 'string') throw new Error('cardNumber must be a `string`');
  return /^[N,V,Q,S,W,T]([A-Z ][0-9]{1,6}|[A-Z]{2}[0-9]{1,5}|[A-Z]{3}[0-9]{1,4})[A-Z]?$/.test(cardNumber);
};
