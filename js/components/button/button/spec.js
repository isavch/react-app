import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Button from './button.js';
import styles from './button.scss';

describe("<Button />", function() {

  it("should exist", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).to.exist;
  });

  it("should have label", () => {
    const wrapper = shallow(<Button label='Test'/>);

    expect(wrapper.contains('Test')).to.equal(true);
  });

  it('should have custom className', () => {
    const wrapper = shallow(<Button label='Test' className='test'/>);

    expect(wrapper.hasClass('test')).to.be.equal(true);
  });

  it('should be active', () => {
    const wrapper = shallow(<Button label='Test' active={true}/>);

    expect(wrapper.hasClass(styles['non-active'])).to.be.equal(false);
  });

  it("onClick should have been called", () => {
    const callback = sinon.spy();
    const wrapper = shallow(<Button onClick={callback} />);

    wrapper.simulate('click');

    expect(callback.calledOnce).to.equal(true);
  });

});
