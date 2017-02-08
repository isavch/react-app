/** @module Validator */
import { get, set } from 'lodash';

import validators from './validators';
import errorMessages from './errorMessages';

/**
 * @function
 * @name Validator
 * @param data {Object} Data
 * @param rules {Object[]} Validation rules
 * @returns {Object} Object with errors messages
 */
export default (data, rules) => {
  return Object.keys(rules).reduce((errors, fieldName) => {
    const fieldRules = rules[fieldName];

    set(errors, fieldName, Object.keys(fieldRules).reduce((res, validatorName) => {
      const validator = validators[validatorName];
      const rule = fieldRules[validatorName];

      if (!validator(get(data, fieldName), rule)) {
        const message = errorMessages[validatorName];

        res.push(typeof message === 'function' ? message(rule) : message);
      }

      return res;

    }, []).join(','));

    return errors;

  }, {});
};
