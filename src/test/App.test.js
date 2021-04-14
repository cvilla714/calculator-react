import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('should render the correct content for the Calculator Page', () => {
  const tree = renderer.create(<App />).toJSON();
});
