import * as React from 'react';

interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps) => (
  <h1>{`Hello from ${compiler} and ${framework}!`}</h1>
);

export default Hello;
