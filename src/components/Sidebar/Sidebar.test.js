import React from 'react';
import renderer from 'react-test-renderer';
import { PureSidebar as Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const props = {
      data: {
        site: {
          siteMetadata: {
            author: {
              name: 'name',
              photo: '/stan.png',
              bio: 'bio',
              contacts: {
                twitter: '#',
                github: '#'
              }
            },
            menu: [
              {
                label: 'Item 0',
                path: '/#0/'
              },
              {
                label: 'Item 1',
                path: '/#1/'
              }
            ],
            copyright: 'copyright'
          }
        }
      }
    };

    const tree = renderer.create(<Sidebar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
