import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Input from '../input';
import Search from './search';

describe('<Search />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).to.exist;
  });

  it('should call callback with correct value', done => {
    let result;
    const value = 'Test';
    const expectedResult = {search_field: 'name', search_value: value};
    const onSearch = value => result = value;
    const wrapper = shallow(<Search field='name' onSearch={onSearch} />);

    wrapper.find(Input).simulate('change', value);

    setTimeout(() => {
      try {
        expect(result).to.deep.equal(expectedResult);
        done();
      } catch (e) {
        done(e);
      }
    }, 300);
  });
});
