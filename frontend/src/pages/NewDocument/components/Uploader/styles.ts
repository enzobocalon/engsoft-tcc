import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 0.25rem;
  margin-block: 0.25rem;

  .upload {
    display: none;
  }
`;

export const EmptyUpload = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: inherit;
  width: 100%;
  padding: 1rem 0.5rem;
  cursor: pointer;
  font-size: 14px;
  border-radius: 0.25rem;
  transition: all 0.3s ease;

  small {
    color: #a1a1a1;
    font-size: 12px;
    transition: color 0.5s ease;
  }

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.blue.default};

    small {
      color: white;
    }
  }
`;

export const UploadedContainer = styled.div`
  width: 100%;
`;

export const UploadedItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  > svg {
    color: ${({ theme }) => theme.red.error};
    cursor: pointer;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
`;
