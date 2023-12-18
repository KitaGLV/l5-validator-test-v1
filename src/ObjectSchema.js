export default class ObjectSchema {
  shape(fields) {
    this.schema = fields;
    return this;
  }

  isValid(value) {
    const valueKeys = Object.keys(value);
    const schemaKeys = Object.keys(this.schema);

    if (valueKeys.length !== schemaKeys.length) {
      return false;
    }

    return valueKeys.every((key) => this.schema[key].isValid(value[key]));
  }
}
