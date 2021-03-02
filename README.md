# validate-dva-number

DVA Veteran File Number validation. The Veteran file number occupies a minimum of 3 and up to 9 characters in total.

DVA File Number contains the following fields:

State Identifier (1 uppercase alpha character)
War Code (up to 3 uppercase alpha characters or 1 space)
Numeric Field (up to 6 numeric characters)
Dependency indicator optional, 1 uppercase alpha character)

The first character is the state code (an alphabetic character) - N, V, Q, W, S or T for the appropriate state/territory. Australian Capital Territory is included in New South Wales (N) and Northern Territory with South Australia (S). 

The next seven characters are the file number, made up of a war code plus numeric digits (at least one numeric and no spaces allowed between war code and numerics), where:
* if War code is 1 alphabetic character (or space), up to 6 numeric characters (AN, ANN, ... ANNNNNN)
* if War code is 2 alphabetic characters, up to 5 numeric characters (AAN, AANN, ... AANNNNN)
* if War code is 3 alphabetic characters, up to 4 numeric characters (AAAN, AAANN, ... AAANNNN)

For dependents of veterans, the last character is always an alphabetic character. The alphabetic code is generated in the order by which the cards are issued. For example A, B, C, D etc.

The format must be as follows:
* 1st character must be alpha;
* 2nd character may be alpha or space;
* 3rd character may be alpha or numeric; 
* 4th character (if populated) may be alpha or numeric; 
* 5th character (if populated) may be alpha or numeric; 
* 6th character (if populated) may be alpha or numeric; 
* 7th character (if populated) may be alpha or numeric; 
* 8th character (if populated) may be alpha or numeric; 
* 9th character (if populated) must be alpha.

Examples:
W 1, NX5, NX5A, SCGW1234, SCGW1234B

## Install

```
$ yarn add validate-dva-number
```

or NPM:

```
$ npm install validate-dva-number
```

## Usage

```js
const validateDvaNumber = require('validate-dva-number');

validateDvaNumber('NB123456');
//=> true
```


## API

### validateDvaNumber(input)

#### input

Type: `string`

The DVA card number

## License

MIT © [Medipass](https://medipass.com.au)
