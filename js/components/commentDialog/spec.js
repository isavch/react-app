import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import CommentDialog from './commentDialog';

describe('<CommentDialog />', () => {
  it('should be exist', () => {
    const wrapper = shallow(<CommentDialog />);

    expect(wrapper).to.exist;
  });

  it('should be close by defalt', () => {
    const wrapper = shallow(<CommentDialog />);

    expect(wrapper.props().active).to.be.false;
  })

  it('should be open', () => {
    const wrapper = shallow(<CommentDialog active={true} />);

    expect(wrapper.props().active).to.be.true;
  })

  // TODO
  it('should be possible to cancel', () => {})
  it('should be possible to save', () => {})
})
