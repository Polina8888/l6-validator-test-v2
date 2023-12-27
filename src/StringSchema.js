export default class StringSchema {
  constructor(validator) {
    this.validators = [...validator];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  hasSpaces() {
    const validator = (value) => value.includes(' ');
    return new StringSchema([...this.validators, validator]);
  }
}
