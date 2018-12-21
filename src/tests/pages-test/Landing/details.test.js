import React from 'react';
import {shallow} from 'enzyme';

import Details from '../../../pages/Landing/details';

describe('<Details />', ()=> {
  it('should render without crashing', ()=> {
    shallow(<Details />)
  });

  it('should contain 3 detail sections', ()=> {
    const wrapper = shallow(<Details />);
    const detailsArray = wrapper.find('.detail')
    expect(detailsArray).toHaveLength(3)
  })
})