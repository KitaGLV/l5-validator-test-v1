export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  length(value) {
    const validator = (arr) => arr.length === value;
    this.validators.push(validator);
    return this;
  }
}
