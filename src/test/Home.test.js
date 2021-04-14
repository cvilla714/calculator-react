import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('should display the correct content of the Home Page', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
