import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.white.dark};
  padding: 0.25rem;
  border-radius: 0.25rem;

  svg {
    width: 20px;
    height: 20px;
    margin-inline: 4px;
  }
`;

export const SearchGroup = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  margin-top: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.white.dark};
  padding: 1rem;
  font-weight: 500;
`;
