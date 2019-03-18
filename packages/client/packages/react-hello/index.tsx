import * as React from 'react';

console.log('react hello package');
export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = ({ compiler, framework }: HelloProps) => (
  <h1>{`Hello from ${compiler} and ${framework}!`}</h1>
);
