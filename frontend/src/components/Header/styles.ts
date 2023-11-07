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

  @media (max-width: 1024px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 16px;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
