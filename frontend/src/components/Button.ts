import { styled, css } from 'styled-components';

interface ButtonProps {
  invert?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.blue.default};
  color: ${({ theme }) => theme.white.default};
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.blue.light};
  }

  ${({ invert, theme }) =>
    invert &&
    css`
      background-color: ${theme.white.default};
      color: ${theme.blue.default};
    `};
`;
