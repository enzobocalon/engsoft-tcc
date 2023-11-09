import { css, styled } from 'styled-components';

interface TagProp {
  highlight?: number;
}

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
  position: relative;

  input {
    flex: 1;
    min-width: 160px;
  }
`;

export const Tag = styled.div<TagProp>`
  background-color: ${({ theme }) => theme.blue.default};
  color: white;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.blue.light};
  }

  ${({ highlight }) =>
    highlight === 1 &&
    css`
      background-color: ${({ theme }) => theme.white.default};
      border: 1px solid ${({ theme }) => theme.blue.default};
      color: ${({ theme }) => theme.blue.default};
    `}
`;

export const FoundKeywords = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #d1d1d1;
  background-color: white;
  top: 3.5rem;
  left: 0;
  padding: 1rem;
  z-index: 100;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  border-radius: 0.25rem;
`;
