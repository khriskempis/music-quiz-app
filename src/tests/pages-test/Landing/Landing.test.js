import React from 'react';
import {shallow} from 'enzyme';

import {Landing} from '../../../pages/Landing/Landing';

describe('<Landing />', ()=> {
  it('should render without crashing', ()=> {
    const dispatch = jest.fn();
    shallow(<Landing dispatch={dispatch}/>)
  })
})