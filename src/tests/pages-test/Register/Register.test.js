import React from 'react';
import {shallow} from 'enzyme';

import {Register} from '../../../pages/Register/Register';

describe('<Register />', ()=> {
  it('should render without crashing', ()=> {
    shallow(<Register/>);
  })
})