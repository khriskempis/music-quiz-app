import React from 'react'
import {shallow} from 'enzyme'

import {options as Options} from '../../../pages/Dashboard/options';

describe('<Options />', ()=> {
  it('should render without crashing', ()=> {
    const dispatch = jest.fn();
    shallow(<Options dispatch={dispatch}/>)
  });
});