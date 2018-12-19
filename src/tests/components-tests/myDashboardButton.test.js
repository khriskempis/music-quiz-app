import React from 'react';
import {shallow} from 'enzyme';

import {myDashboardButton as Button} from '../../components/myDashboardButton';

describe('<myDashboardButton', ()=> {

  it('should render without crashing', ()=> {
    shallow(<Button />)
  })

  it('should call dispatch when clicked', ()=> {
    const dispatch = jest.fn();
    const wrapper = shallow(<Button dispatch={dispatch}/>);
    const button = wrapper.find('.my-dashboard-button')

    button.simulate('click');
    expect(dispatch).toHaveBeenCalled();
  })
})