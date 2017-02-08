import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Item from './item';
import Filter from './filter';

describe('<Filter />', () => {
  const filterProps = {
    field: 'test',
    filterParams: {
      filter1: true,
      filter2: false
    },
    filters: [
      {
        label: 'Filter 1',
        value: 'filter1'
      },
      {
        label: 'Filter 2',
        value: 'filter2'
      }
    ]
  };

  it('should exist', () => {
    const wrapper = shallow(<Filter />);

    expect(wrapper).to.exist;
  });

  it('should render items', () => {
    const wrapper = mount(<Filter {...filterProps} onFilter={() => {}} />);

    expect(wrapper.find(Item).length).to.equal(3);
  });
});
