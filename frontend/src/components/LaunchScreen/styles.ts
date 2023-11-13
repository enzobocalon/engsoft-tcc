import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import bg from '../../assets/images/s1.png';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  img {
    max-width: 240px;
  }

  span {
    color: white;
  }
`;
