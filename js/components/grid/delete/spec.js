import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Delete from './delete';

describe('<Delete />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Delete />);

    expect(wrapper).to.exist;
  });
});
