import _ from 'lodash';

export default class ObjectSchema {
  constructor(shapes) {
    this.shapes = shapes;
  }

  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(obj) {
    const keys = Object.keys(obj);

    const iter = (value, key, schema) => {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        const newSchema = schema[key];
        return Object.keys(value).map((k) => iter(value[k], k, newSchema));
      }

      return schema[key].isValid(value);
    };

    return _.flattenDeep(keys.map((key) => iter(obj[key], key, this.shapes)))
      .every((value) => value);
  }
}
