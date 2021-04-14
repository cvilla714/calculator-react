import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('should display the correct quote on the Quote Page', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
