import React from 'react';
import {shallow} from 'enzyme';

import {hero as Hero} from '../../../pages/Landing/hero';

describe('<Hero />', ()=> {
  it('should render without crashing', ()=> {
    const dispatch = jest.fn();
    const wrapper = shallow(<Hero dispatch={dispatch}/>)
  });

  it('should call dispatch when hero button is clicked', ()=> {
    const dispatch= jest.fn();
    const wrapper = shallow(<Hero dispatch={dispatch}/>)
    const button = wrapper.find('.hero-button');

    button.simulate('click')
    expect(dispatch).toHaveBeenCalled();
  })
})