import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    robots: [],
    searchField: '',
    isPending: false,
    onSearchChange: jest.fn(),
    onRequestRobots: jest.fn()
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage Component', () => {
  expect(wrapper).toMatchSnapshot();
});

describe('Test filterRobots method', () => {
  it('filters robots correctly with empty robots array', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('filters robots correctly with a robot matching the searchField', () => {
    const mockProps2 = {
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'john',
      isPending: false,
      onSearchChange: jest.fn(),
      onRequestRobots: jest.fn()
    };
  
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
  
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }]);
  });

  it('filters robots correctly for non-matching robots', () => {
    const mockProps3 = {
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'a',
      isPending: false,
      onSearchChange: jest.fn(),
      onRequestRobots: jest.fn()
    };
  
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
  
    expect(wrapper3.instance().filterRobots()).toEqual([]);
  });
});
