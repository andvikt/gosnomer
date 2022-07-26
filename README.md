# Gosnomer
## About
Gosnomer - Node.js module for standardization of the car license plate of the Russian Federation.

## Installation

```sh-session
npm i gosnomer
```

## Docs
- Register the car license plate:

```js
const { LicensePlateRu } =  require('gosnomer');
```

**isValid**
Checks the validity of the car number
```js
const { LicensePlateRu } = require('gosnomer');
const valid = new LicensePlateRu('в042вв 197').isValid()
// <Boolean> true
```

**standart**
Standardizes a string or outputs an empty one if the number is entered incorrectly
```js
// ✔️

const { LicensePlateRu } = require('gosnomer');
const valid = new LicensePlateRu('в042вв 197').standart()
// <String> "В042ВВ 197"

// ❌
const { LicensePlateRu } = require('gosnomer');
const valid = new LicensePlateRu('в042в 197').standart()
// <String> ""
```

**getInformation**
information about the number and region of the car number
```js
const { LicensePlateRu } = require('gosnomer');
const valid = new LicensePlateRu('в042вв 197').getInformation()
/* <JSON> 
{
  isValid: true,
  plate: { input: 'в042вв 197', number: 'В042ВВ 197' },
  region: { number: '197', name: 'Москва и пригород' }
} 
*/
```