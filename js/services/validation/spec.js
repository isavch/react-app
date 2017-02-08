import { expect } from 'chai';

import validate from './index';
import messages from './errorMessages';

describe('Validation', () => {
  const wrongData = {
    name: 'John',
    profession: '',
    age: '23y',
    email: 'test@test-com;'
  };
  const correctData = {
    name: 'Franklin',
    profession: 'Farmer',
    age: '23',
    email: 'test@test.com;'
  };
  const rules = {
    age: {
      digits: true
    },
    profession: {
      required: true
    },
    name: {
      minLength: 6
    },
    email: {
      email: true
    }
  };

  it('should return errors', () => {
    const result = validate(wrongData, rules);

    expect(result.profession).to.equal(messages.required);
    expect(result.name).to.equal(messages.minLength(6));
    expect(result.age).to.equal(messages.digits);
    expect(result.email).to.equal(messages.email);
  });

  it('should not return errors', () => {
    const result = validate(correctData, rules);

    expect(result.name).to.equal('');
    expect(result.age).to.equal('');
    expect(result.age).to.equal('');
    expect(result.profession).to.equal('');
  });

  it('should not validate', () => {
    const result = validate(correctData, {});

    expect(result).to.deep.equal({});
  })
});
