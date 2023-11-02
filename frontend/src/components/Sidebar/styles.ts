import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.blue.default};
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-block: 1rem;

  > img {
    max-height: 38px;
  }
`;
