import React from 'react';
import renderer from 'react-test-renderer';

import { Hello } from '../src/Hello';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Hello compiler="webpack" framework="react" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
