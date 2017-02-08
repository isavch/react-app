import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import PageItem from './item';
import Break from './break';
import Pagination from './pagination';

describe('<Pagination />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Pagination />);

    expect(wrapper).to.exist;
  });

  it('should change page number', () => {
    let currentPage = 0;
    const wrapper = shallow(<Pagination pageNum={2} onChange={page => currentPage = page } />);
    const { theme } = wrapper.instance().props;

    wrapper.find('.' + theme.next).simulate('click');
    expect(currentPage).to.equal(1);
    wrapper.find('.' + theme.next).simulate('click');
    expect(currentPage).to.equal(1);
    wrapper.find('.' + theme.previous).simulate('click');
    expect(currentPage).to.equal(0);
  });

  it('should be configurable', () => {
    const wrapper = shallow(<Pagination
      pageNum={10}
      startPage={2}
      previousEnable={false}
      onChange={() => {}}
    />);
    const { props, props: {theme} } = wrapper.instance();

    expect(wrapper.find('.' + theme.previous).length).to.equal(0);
    expect(wrapper.find('.' + theme.next).length).to.equal(1);
    expect(props.pageNum).to.equal(10);
    expect(props.startPage).to.equal(2);
  });

  it('should render correct children number', () => {
    const wrapper = shallow(<Pagination
      pageNum={2}
      onChange={() => {}}
    />);
    const { theme } = wrapper.instance().props;

    expect(wrapper.find(PageItem).length).to.equal(2);
  });

  it('should render break', () => {
    const wrapper = mount(<Pagination
      pageNum={6}
      onChange={() => {}}
    />);
    const { theme } = wrapper.instance().props;

    expect(wrapper.find(Break).length).to.equal(1);
  });
});
