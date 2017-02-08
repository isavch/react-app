import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Action from './action';

describe('<Action />', () => {
  const props = {
    icon: 'remove',
    item: {}
  };

  it('should exist', () => {
    const wrapper = shallow(<Action />);

    expect(wrapper).to.exist;
  });

  it('should call callback', () => {
    const callback = sinon.spy();
    const wrapper = mount(<Action {...props} action={callback} />);

    wrapper.simulate('click');

    expect(callback.called).to.equal(true);
  });
});
