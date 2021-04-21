import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

// 单元测试应用shallow  集成测试用 mount
it('renders learn react link', () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.find('[data-test="container"]').length).toBe(1);
  // expect(wrapper.find('[data-test="container"]').prop('title')).toBe('dell lee');
  expect(wrapper.find('[data-test="container"]')).toHaveProp('title', 'dell lee');
});
