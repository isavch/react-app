import React from 'react';
import {shallow} from 'enzyme';
import Primary from './primary';

test('Button should be rendered with proper label', () => {
  const label = 'Button label';
  const button = shallow(<Primary label={label}/>);

  expect(button.text()).toEqual(label);
});
