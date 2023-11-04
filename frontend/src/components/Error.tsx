import { CrossCircledIcon } from '@radix-ui/react-icons';
import { styled } from 'styled-components';

const ErrorText = styled.small`
  color: ${({ theme }) => theme.red.error};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ErrorProps {
  message: string | undefined;
}

export function Error({ message }: ErrorProps) {
  return (
    <>
      {message && (
        <ErrorText>
          <CrossCircledIcon />
          {message}
        </ErrorText>
      )}
    </>
  );
}
