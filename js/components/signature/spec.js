import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Signature from './signature';

import styles from './signature.scss';

describe('<Signature />', () => {
  const signature = 'driver';

  it('should exist', () => {
    const wrapper = shallow(<Signature />);

    expect(wrapper).to.exist;
  });

  it('should display error', () => {
    const wrapper = shallow(<Signature />);

    expect(wrapper.find(`.${styles.error}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.image}`).length).to.equal(0);
  });

  it('should display signature without error', () => {
    const wrapper = shallow(<Signature signature={signature} />);

    expect(wrapper.find(`.${styles.error}`).length).to.equal(0);
    expect(wrapper.find(`.${styles.image}`).length).to.equal(1);
  });
});
