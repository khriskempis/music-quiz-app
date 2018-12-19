import React from 'react';
import Logo from '../../components/logo';

import {shallow} from 'enzyme';

describe('<Logo/>', ()=> {
  it('should render without crashing', ()=> {
    shallow(<Logo/>);
  })
})