import React from 'react';
import {shallow} from 'enzyme';

import OptionalTestButton from '../../../pages/Dashboard/optionalTest'

describe('<OptionalTestButton', ()=> {
  it('should render without crashing', ()=> {
    shallow(<OptionalTestButton />);
  });

  it('should call props when clicked', ()=> {
    const callback = jest.fn();
    const wrapper = shallow(
      <OptionalTestButton 
        testName={"Middle C Position"}
        onClick={callback}/>)
    const button = wrapper.find('.dashboard-test-button')
    button.simulate('click');
    expect(callback).toHaveBeenCalled();
  })
})