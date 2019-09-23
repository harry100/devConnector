import React from 'react';
import { shallow } from '../enzyme';

import Experience from '../components/dashboard/Experience';

describe('Experience test', () => {
  it('Renders Experience component', () => {
    const exp = [{_id: '123', title:'test', company: 'test', location: 'test', from: 'test', to: null, desc: 'test'}]
    const wrapper = shallow(<Experience experience={exp} />);

    expect(wrapper.find('.table')).toBeDefined();

  })
})
