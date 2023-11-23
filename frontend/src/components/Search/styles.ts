import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  overflow: hidden;

  & > .pagination {
    display: flex;
    align-items: center;
    position: absolute;
    width: fit-content;
    z-index: 100;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    gap: 0.25rem;

    & > li > a {
      display: block;
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > .selected {
      color: white;
      background-color: ${({ theme }) => theme.blue.default};
    }
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
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
  max-height: calc(100vh - calc(87px + 70px));
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.white.dark};
  padding: 1rem;
  font-weight: 500;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #b8c0c4;
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #adb1b3;
  }

  > .errorsContainer {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;

export const Errors = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #a1a1a1;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
