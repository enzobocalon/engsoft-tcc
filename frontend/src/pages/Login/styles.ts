import { styled } from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.blue.default};

  img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.white.default};
  width: 100%;
  max-width: 540px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 0.5rem;

  button {
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  align-items: center;
  border: 1px solid #d3d3d3;
  margin-block: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
`;
