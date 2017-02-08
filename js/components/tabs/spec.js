import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import Tabs, { Tab } from './tabs';
import styles from './tabs.scss';

const create = () => {
  return mount(
      <Tabs>
        <Tab label='TestLabel'>
          <div className='test'>Test</div>
        </Tab>
        <Tab label='TestLabel1'>
          <div className='test1'>Test1</div>
        </Tab>
      </Tabs>
  );
};
describe('<Tabs />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Tabs />);

    expect(wrapper).to.exist;
  });

  it('should render tab', () => {
    const wrapper = create();

    expect(wrapper.find('nav').childAt(0).text())
      .to.be.equal('TestLabel');
    expect(wrapper.find('nav').childAt(1).text())
      .to.be.equal('TestLabel1');
  });

  it('should render tab content', () => {
    const wrapper = create();

    expect(wrapper.find('.js-panel').first().text())
      .to.be.equal('Test');
  });

  it('should be switched on first tab by default', () => {
    const wrapper = create();

    expect(wrapper.find(`.${styles.navPannel}`).childAt(0).hasClass(styles.active))
      .to.be.equal(true);

    expect(wrapper.state().selectedIndex).to.be.equal(0);
  });

  it('should be possible switch tabs', () => {
    const wrapper = create();

    wrapper.find('nav').childAt(1).simulate('click');

    expect(wrapper.state().selectedIndex).to.be.equal(1);
  });
});
