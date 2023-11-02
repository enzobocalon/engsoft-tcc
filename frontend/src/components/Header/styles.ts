import { styled } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white.default};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
