import { ComponentProps } from 'react';
import { styled, css } from 'styled-components';
import Spinner from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean;
  children: React.ReactNode;
  invert?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.blue.default};
  color: ${({ theme }) => theme.white.default};
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.white.dark};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.blue.light};
  }

  ${({ invert, theme }) =>
    invert &&
    css`
      background-color: ${theme.white.default};
      color: ${theme.blue.default};
    `};
`;

export function Button({ invert, loading, children, ...props }: ButtonProps) {
  return (
    <StyledButton {...props} invert={invert} disabled={loading}>
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
}
