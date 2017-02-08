import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import SignInForm from './signinForm';
import Button from '../button';

describe('<SignInForm />', () => {
   it('should exist', () => {
       const wrapper = shallow(<SignInForm />);

       expect(wrapper).to.exist;
   });

  it('onSignIn should not be called without credentials', () => {
    const onSignIn = sinon.spy();
    const wrapper = shallow(<SignInForm onSignIn={onSignIn}/>);

    wrapper.find(Button).simulate('click', {preventDefault: () => {}});

    expect(onSignIn.calledOnce).to.be.equal(false);
  });

  it('onSignIn should be called with {email, password}', () => {
    const onSignIn = sinon.spy();
    const wrapper = shallow(<SignInForm onSignIn={onSignIn}/>);

    wrapper.setState({email: 'test', password: 'test'});
    wrapper.find(Button).simulate('click', {preventDefault: () => {}});

    expect(onSignIn.calledWith({email: 'test', password: 'test'})).to.be.equal(true);
  });
});
