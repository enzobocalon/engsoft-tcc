import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const DesktopMobileContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    width: 100vw;
    position: fixed;
    flex-direction: row;
    max-width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const CrossIconContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    > svg {
      width: 24px;
      height: 24px;
      color: white;
      z-index: 10;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.blue.default};
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 75%;
  }
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
