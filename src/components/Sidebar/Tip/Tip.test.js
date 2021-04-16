import React from 'react';
import renderer from 'react-test-renderer';
import Tip from './Tip';

describe('Tip', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tip />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
