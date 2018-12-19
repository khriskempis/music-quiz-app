import React from 'react';
import {shallow} from 'enzyme';

import Navigation from '../../components/navigation';

describe ('<Navigation />', ()=> {
  it('should render without crashing', ()=> {
    shallow(<Navigation />)
  })
})