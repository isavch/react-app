import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Field from './index';

describe('<Field />', () => {
  it('should have label', () => {
    const wrapper = shallow(<Field label='Test' />);

    expect(wrapper.text()).to.equal('Test');
  });

  it('should have value', () => {
    const wrapper = shallow(<Field value='Test'/>);

    expect(wrapper.find('span').text()).to.equal('Test');
  });

  it('editable should have an input', () => {
    const wrapper = shallow(<Field isEditable={true} value='Test'/>);

    expect(wrapper.find('input').length).to.equal(1);
    expect(wrapper.find('input').prop('value')).to.equal('Test');
  });

  it('should have custom class', () => {
    const wrapper = shallow(<Field className='test-class'/>);

    expect(wrapper.hasClass('test-class')).to.be.true;
  });

  it('should be disabled', () => {
    const wrapper = shallow(<Field disabled={true}/>);

    expect(wrapper.find('input[disabled]').length).to.equal(1);
  });

  it('should have type', () => {
    const wrapper = shallow(<Field type='password' isEditable={true}/>);

    expect(wrapper.find('input[type="password"]').length).to.equal,(1);
  });

  it('should rneder children', () => {
    const wrapper = shallow(
    <Field>
      <div className='children'></div>
    </Field>);

    expect(wrapper.find('.children').length).to.equal(1);
  });

  it('onFieldChange callback should be called', () => {
    const callback = sinon.spy();
    const wrapper = shallow(<Field isEditable={true} onFieldChange={callback}/>);

    wrapper.find('input').simulate('change', {target: {value: 'Test'}});

    expect(callback.withArgs('Test').calledOnce).to.be.true;
  });
});
