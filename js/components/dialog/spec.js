import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Dialog from './dialog';

import styles from './dialog.scss';

describe('<Dialog />', () => {
  it('should be exist', () => {
    const wrapper = shallow(<Dialog />);

    expect(wrapper).to.exist;
  })
  it('should be none display by default', () => {
  const wrapper = mount(<Dialog />);

  expect(wrapper.prop('active')).to.be.false;
  })
  it('should be display', () => {
    const wrapper = mount(<Dialog active={true}/>);

    expect(wrapper.prop('active')).to.be.true;
  })
  it('should take data', () => {
    const title = 'Edit signature';
    const headerBtn = <a>Clear</a>;
    const actions = [{label: 'Cancel', onClick() {}}, {label: 'Ok', onClick() {}}];
    const wrapper = shallow(<Dialog
                              title={title}
                              headerBtn={headerBtn}
                              actions={actions}
                             >
                              <span>works</span>
                             </Dialog>);

    expect(wrapper.find('header').text()).to.equal('Edit signature')
    expect(wrapper.find('section').text()).to.equal('works');
    expect(wrapper.find('footer').text()).to.equal('CancelOk');
  })
  it('should be closed', () => {
    const onOverlayClick = sinon.spy();
    const wrapper = shallow(<Dialog
                            active={true}
                            onOverlayClick={onOverlayClick}
                          />);

    wrapper.find(`.${styles.backSide}`).simulate('click');
    expect(onOverlayClick.calledWith()).to.be.equal(true);
  });

})
