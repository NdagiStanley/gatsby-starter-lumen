import React from 'react';
import renderer from 'react-test-renderer';
import TK from './TK';

describe('TK', () => {
  it('renders correctly', () => {

    const tree = renderer.create(<TK />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
