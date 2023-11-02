import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 40%;
  background-color: ${({ theme }) => theme.white.dark};
  height: 40px;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  label {
    letter-spacing: -0.065px;
    font-size: 14px;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
  }
`;

export const OptionsContainer = styled(motion.div)`
  position: absolute;
  bottom: -110px;
  left: 0;
  background-color: ${({ theme }) => theme.white.default};
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.25rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Options = styled.div`
  margin-block: 0.5rem;
  letter-spacing: -0.065px;
  font-size: 14px;
  padding: 8px;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.blue.default};
    color: ${({ theme }) => theme.white.dark};
  }
`;
