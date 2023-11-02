import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  border: 1px solid #d3d3d3;
  padding: 0.5rem;
  margin-block: 0.5rem;
  border-radius: 0.25rem;

  > p {
    margin-block: 0.25rem;
  }
`;

export const Info = styled.div`
  span {
    display: block;
    margin-top: 4px;
    font-size: 14px;
    font-weight: normal;
  }
`;
