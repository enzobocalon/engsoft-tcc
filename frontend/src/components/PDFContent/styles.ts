import { styled } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  > p {
    margin-block: 0.25rem;
    font-weight: 500;
  }

  iframe {
    flex: 1;
    outline: none;
    border: 2px solid #d3d3d3;
    border-radius: 12px;
  }
`;
