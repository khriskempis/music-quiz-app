import React from 'react';
import {shallow} from 'enzyme';

import Features from '../../../pages/Landing/features';

describe('<Features />', ()=> {
  it('should render without crashing', ()=> {
    shallow(<Features />);
  })

  it('should contain 4 li elements', ()=> {
    const wrapper = shallow(<Features />);
    const liElements = wrapper.find('li');
    expect(liElements).toHaveLength(4)
  })
})