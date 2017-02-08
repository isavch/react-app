import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Input from '../input';
import EditableItem from './index';

describe('<EditableItem />', () => {
  it('Should exist', () => {
    const wrapper = shallow(<EditableItem/>);

    expect(wrapper).to.exist;
  });

  it('Should display data', () => {
    const expectedResult = 'Test';
    const wrapper = mount(<EditableItem
      type='text'
      value={expectedResult}
    />);

    expect(wrapper.find(Input).find('input').first().props().value).to.equal(expectedResult);
  });

  it('Should change data', () => {
    let result;
    const expectedResult = 'Test2';
    const wrapper = shallow(<EditableItem
      type='text'
      value='Test'
      edit={true}
      onChange={value => result = value}
    />);

    wrapper.find(Input).simulate('change', expectedResult);

    expect(result).to.equal(expectedResult);
  });
});
