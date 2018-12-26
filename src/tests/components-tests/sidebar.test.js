import React from 'react';
import {shallow} from 'enzyme';

import {sidebar as Sidebar} from '../../components/sidebar';

describe('<Sidebar />', ()=> {
  it('should render without crashing', ()=> {
    shallow(<Sidebar user="testUser"/>)
  });

  it('should contain the user name', ()=> {
    const user = "test User"
    const wrapper = shallow(<Sidebar user={user}/>)
    const userImage = wrapper.find('.user-image')

    expect(userImage.text()).toEqual(`<menu />Welcome ${user}!`)
  });

  it('should toggle sidbare when clicked', ()=> {
    const user = "test User";
    const wrapper = shallow(<Sidebar user={user}/>)
    const node = wrapper.find('.sidebar-links');
    wrapper.instance().handleMenuClick()
    wrapper.update();
    expect(node.hasClass('sidebar-left')).toEqual(true);
  });

  it('should dispatch Middle C position test when link is clicked', ()=> {
    const dispatch = jest.fn()
    const wrapper = shallow(<Sidebar dispatch={dispatch}/>);
    const node = wrapper.find('.sidebar-test-links li');

    node.first().simulate('click')
    expect(dispatch).toHaveBeenCalled();
  })
})
