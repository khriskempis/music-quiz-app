import React from 'react';
import {shallow} from 'enzyme';

import Loading from '../../components/loading';

describe('<Loading />', () => {
  it('should render without crashing', ()=> {
    shallow(<Loading />)
  }) 
})