import Chance from 'chance';
import { isObject, isArray, isNull } from 'underscore';

let chance = new Chance();
let random = {};

random.Object = function (pattern) {
  if (isPlainObject(pattern) && !isNull(pattern)) {
    let ret = {};
    for (let key in pattern) {
      ret[key] = random.Object(pattern[key]);
    };
    return ret;
  } else {
    let type = typeof pattern;

    switch(type) {
      case 'number':
        return chance.integer();
      case 'string':
        return chance.string();
      case 'function':
        ///////////////////////////////////////////////////////
        // in fact, it should check if a function is a class //
        // but for simplicity, original value is returned    //
        ///////////////////////////////////////////////////////
        return pattern;
      case 'boolean':
        return chance.bool();
      case 'undefined':
        return undefined;
      case 'object':
        if (isArray(pattern)) {
          return pattern.map((value) => {
            return random.Object(value);
          });
        };

        if (isNull(pattern)) {
          return null;
        };
      default:
        throw new Error('Unknown type');
    }

  };
};

export default random;
