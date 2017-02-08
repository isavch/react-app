import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import FontIcon from 'react-toolbox/lib/font_icon';

import Sort from './index';

describe('<Sort />', () => {
  const sortParams = {
    field: 'test',
    direction: 'DESC',
    isActive: true
  };

  it('should exist', () => {
    const wrapper = shallow(<Sort />);

    expect(wrapper).to.exist;
  });

  it('should display current sort', () => {
    const wrapper = mount(<Sort {...sortParams} />);

    expect(wrapper.find(FontIcon).first().text()).to.equal('arrow_downward');
  });

  it('should display default direction', () => {
    const wrapper = mount(<Sort field={sortParams.field} />);

    expect(wrapper.find(FontIcon).first().text()).to.equal('arrow_upward');
  });

  it('should call calback', () => {
    const callback = sinon.spy();
    const wrapper = mount(<Sort {...sortParams} onSort={callback} />);

    wrapper.simulate('click');

    expect(callback.called).to.equal(true);
  });
});
