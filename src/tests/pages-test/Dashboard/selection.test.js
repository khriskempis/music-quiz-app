import React from 'react';
import {shallow} from 'enzyme';

import Selection from '../../../pages/Dashboard/selection';

describe('<Selection />', ()=> {
  it('should render without crashing', ()=> {
    shallow(
      <Selection 
        numberOfQuestions={10}
        class="class"
        selection={'Practice'} />)
  });

  it('should render appropriate title', ()=> {
    const wrapper = shallow(
      <Selection 
        numberOfQuestions={10}
        class="class"
        selection={"Practice"} />)
    expect(wrapper.find('h1').text()).toEqual('Take a Practice Test')
  })
});