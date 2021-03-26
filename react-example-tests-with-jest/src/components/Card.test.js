import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expects to render a Card Component', () => {
  expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
});