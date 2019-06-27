import React from 'react';
import styled from 'styled-components';

interface IButtonIProps {
  type: 'submit' | 'reset' | 'button';
}

const ButtonElement = styled.button`
  width: 103px;
  height: 32px;
  background-color: #0b66f7;
  font-size: 14px;
  font-weight: 500;
  color: #fefefe;
  border: 0;
`;

const Button: React.FunctionComponent<IButtonIProps> = ({ type, children }) => (
  <ButtonElement type={type}>{children}</ButtonElement>
);
Button.defaultProps = {
  type: 'button',
};

export default Button;
