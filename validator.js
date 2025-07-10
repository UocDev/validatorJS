const chalk = require('chalk');

function isString(value) {
  const result = typeof value === 'string' || value instanceof String;
  console.log(result ? chalk.green('[PASS] String') : chalk.red('[FAIL] Not a String'));
  return result;
}

function isNumber(value) {
  const result = typeof value === 'number' && isFinite(value);
  console.log(result ? chalk.green('[PASS] Number') : chalk.red('[FAIL] Not a Number'));
  return result;
}

function isBoolean(value) {
  const result = typeof value === 'boolean';
  console.log(result ? chalk.green('[PASS] Boolean') : chalk.red('[FAIL] Not a Boolean'));
  return result;
}

function isArray(value) {
  const result = Array.isArray(value);
  console.log(result ? chalk.green('[PASS] Array') : chalk.red('[FAIL] Not an Array'));
  return result;
}

module.exports = {
  isString,
  isNumber,
  isBoolean,
  isArray
};
