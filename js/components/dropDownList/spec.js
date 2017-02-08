import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DropDownList from './index.js';
import Field from '../field';
import styles from './dropdown.scss';

const createComponent = (props) => {
  return shallow(
      <DropDownList
        items={[
            {name: 'one', value: 1},
            {name: 'two', value: 2},
            {name: 'three', value: 3}
        ]}
        selected={2}
        isEditable={true}

        {...props}
      />
  );
};

describe("<DropDownList />", () => {

  it("should exist", () => {
    const wrapper = shallow(<DropDownList />);

    expect(wrapper).to.exist;
  });

  it('should render <Field /> by default', () => {
    const wrapper = shallow(<DropDownList />);

    expect(wrapper.find(Field)).to.have.length(1);
  });

  describe('#isEditable', () => {
    it('should be closed by default', () => {
      const wrapper = createComponent();

      expect(wrapper.state().isExpanded).to.equal(false);
      expect(wrapper.find(`.${styles.container}`).props().style.display).to.equal('none');
    });

    it('should be expanded', () => {
      const wrapper = createComponent({isExpanded: true});

      expect(wrapper.state().isExpanded).to.equal(true);
      expect(wrapper.find(`.${styles.container}`).props().style.display).to.equal('block');
    });

    it('should have label', () => {
      const wrapper =  createComponent({label: 'Test'});

      expect(wrapper.find(`.${styles.label}`).text()).to.equal('Test');
    });

    it('should display placeholder if no selected', () => {
      const wrapper =  createComponent({placeholder: 'Test', selected: null});

      expect(wrapper.find(`.${styles.selected}`).text()).to.equal('Test');
    });

    it('should render items', () => {
      const wrapper =  createComponent();

      expect(wrapper.find(`.${styles.listItem}`)).to.have.length(3);
    });

    it('should have slected item', () => {
      const wrapper =  createComponent({selected: 1});

      expect(wrapper.find(`.${styles.selected}`).text()).to.equal('one');
    });

    it('should be opened', () => {
      const wrapper = createComponent();

      wrapper.find(`.${styles.selected}`).simulate('click');

      expect(wrapper.find(`.${styles.container}`).props().style.display).to.equal('block');
      expect(wrapper.state().isExpanded).to.equal(true);
    });

    it('should be closed', () => {
      const wrapper = createComponent();

      wrapper.find(`.${styles.selected}`).simulate('click');
      wrapper.find(`.${styles.selected}`).simulate('click');

      expect(wrapper.state().isExpanded).to.equal(false);
      expect(wrapper.find(`.${styles.container}`).props().style.display).to.equal('none');
    });

    it('should have been called onSelect', () => {
      const onSelect = sinon.spy();
      const wrapper = createComponent({onSelect: onSelect});

      wrapper.find(`.${styles.selected}`).simulate('click');
      wrapper.find(`.${styles.list}`).childAt(1).simulate('click');

      expect(onSelect.calledWith(2)).to.equal(true);
    });
  });

});
