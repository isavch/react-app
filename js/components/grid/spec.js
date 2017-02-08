import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import FontIcon from 'react-toolbox/lib/font_icon';

import Grid from './grid';
import GridItem from './item';
import vehicles from '../../utils/fixtures/vehicles';

describe('<Grid />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Grid data={[]} fields={[]}/>);

    expect(wrapper).to.exist;
  });

  it('should display data', () => {
    const wrapper = mount(<Grid
      data={vehicles}
      keyField='id'
      fields={[{name: 'name'}, {name: 'type'}, {name: 'model'}]}
    />);

    expect(wrapper.find(GridItem).find('td').first().text()).to.equal(vehicles[0].name);
  });

  it('should show active sort', () => {
    const wrapper = mount(<Grid
      data={vehicles}
      keyField='id'
      sortParams={{
        'sort_fields': 'type',
        'sort_direction': 'DESC'
      }}
      fields={[{name: 'name', sortable: true}, {name: 'type', sortable: true}, {name: 'model'}]}
    />);

    expect(wrapper.find(FontIcon).at(1).text()).to.equal('arrow_downward');
  });
});
