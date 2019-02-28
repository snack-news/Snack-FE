import React from 'react';
import Hello from '../../react-hello';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Hello compiler="webpack" framework="react" />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
