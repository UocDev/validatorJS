# validatorJS
The simple for people who want create validation type data for your application (small / simple)

## Get Started
Clone this repository for your local.
```bash
git clone https://github.com/UocDev/validatorJS.git [YOUR_NAMA_DIRECTORY]
```
Install some Package.
```bash
npm init -y
```
```bash
npm install chalk
```

### Example
```js
const { isString, isNumber, isBoolean, isArray } = require('./validator');

isString('Hello, world!'); // ✅ Green
isString(123);             // ❌ Red

isNumber(42);              // ✅ Green
isNumber('42');            // ❌ Red

isBoolean(true);           // ✅ Green
isBoolean('true');         // ❌ Red

isArray([1, 2, 3]);        // ✅ Green
isArray('not an array');   // ❌ Red
```
Goodluck developer for your future projects!
