export default class NumberSchema {
  validators = [(value) => typeof value === 'number'];
  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  even(value) {
    this.validators.push((value) => value % 2 === 0);
    return this;
  }

  odd(value) {
    this.validators.push((value) => value % 2 !== 0);
    return this;
  }
}
