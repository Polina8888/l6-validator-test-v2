import StringSchema from './StringSchema.js';
import FunctionSchema from './FunctionSchema.js';

export default class Validator {
  string() {
    return new StringSchema([(value) => typeof value === 'string']);
  }

  function() {
    return new FunctionSchema([(value) => typeof value === 'function']);
  }
}
