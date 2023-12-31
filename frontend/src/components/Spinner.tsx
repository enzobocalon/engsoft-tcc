import { styled } from 'styled-components';

interface SpinnerProps {
  stroke?: string;
}

const StyledSpinner = styled.svg<SpinnerProps>`
  animation: rotate 2s linear infinite;
  width: 2rem;
  height: 2rem;

  & .path {
    stroke: ${({ theme, stroke }) => stroke || theme.blue.default};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = ({ stroke }: SpinnerProps) => (
  <StyledSpinner viewBox="0 0 50 50" stroke={stroke}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

export default Spinner;
