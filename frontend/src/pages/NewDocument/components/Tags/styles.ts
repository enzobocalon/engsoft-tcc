import { styled } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0.5rem;
  & > small {
    margin-block: 0.25rem;
    display: block;
    color: #a1a1a1;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: 0.25rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  input {
    flex: 1;
    min-width: 160px;
  }
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.blue.default};
  color: white;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.blue.light};
  }
`;
