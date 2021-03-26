import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expects to render a CardList Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'John John',
      email: 'john@gmail.com',
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});