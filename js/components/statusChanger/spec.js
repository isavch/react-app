import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import StatusChanger from './statusChanger';
import styles from './statusChanger.scss';

describe('<StatusChanger />', () => {
  it('should exist', () => {
    const wrapper = shallow(<StatusChanger />);

    expect(wrapper).to.exist;
  });

  it('should be collapsed by default', () => {
    const wrapper = shallow(<StatusChanger />);

    expect(wrapper.state().isExpanded).to.be.equal(false);
  });

  it('should be expanded', () => {
    const wrapper = shallow(<StatusChanger />);

    wrapper.find(`.${styles.arrow}`).simulate('click');
    expect(wrapper.state().isExpanded).to.be.equal(true);
  });

  it('should be collapsed', () => {
    const wrapper = shallow(<StatusChanger />);

    wrapper.find(`.${styles.arrow}`).simulate('click');
    wrapper.find(`.${styles.arrow}`).simulate('click');

    expect(wrapper.state().isExpanded).to.be.equal(false);
  });

  it('should display status', () => {
    const wrapper = shallow(<StatusChanger status='D'/>);

    expect(wrapper.find(`.${styles.status}`).text()).to.be.equal('DRIVING');
  });

  it('should be onChange called', () => {
    const callback = sinon.spy();
    const wrapper = shallow(
      <StatusChanger onChange={callback} status='SB'/>
    );

    wrapper.find(`.${styles.arrow}`).simulate('click');
    wrapper.find(`.${styles.body}`).childAt(2).simulate('click');

    expect(callback.calledWith('D')).to.be.equal(true);
    expect(wrapper.state().isExpanded).to.be.equal(false);
  });


});
