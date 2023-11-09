import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.white.default};
  padding: 1rem 1.5rem;

  h1 {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    & > h1 {
      font-size: 18px;
    }
  }
`;

export const ReturnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.blue.default};
  }

  @media (max-width: 768px) {
    & > span {
      display: none;
    }
  }
`;

export const Body = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex: 1;
  margin-block: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;

  > button {
    width: 100%;
    margin-block: 0.5rem;
  }
`;

export const FormField = styled.div`
  label {
    font-weight: 500;
  }
  > input {
    border: 1px solid #d1d1d1;
    border-radius: 0.25rem;
    margin-block: 0.5rem;
    padding: 1rem;
  }
`;
