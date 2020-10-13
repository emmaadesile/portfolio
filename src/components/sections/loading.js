import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, breakpoints } from '../../styles/theme';

const changeColor = keyframes`
  0% { color: ${colors.darkGrey}}
  100% { color: ${colors.primaryColor} }
`;

const fillBar = keyframes`
  0% { background: transparent}
  100% { background: ${colors.primaryColor}}
`;

const Box = styled.div`
  display: flex;
  width: 400px;
  height: 10px;
  border: 1px solid ${colors.primaryColor};
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.md}) {
    width: 300px;
  }
`;

const Bar = styled.div`
  width: 10%;
  height: 100%;
  animation: ${fillBar} cubic-bezier(0.075, 0.82, 0.165, 1) both infinite;
  animation-delay: ${({ delay }) => (delay ? delay : '300ms')};
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${colors.black};
`;

const LoadingText = styled.p`
  color: ${colors.primaryColor};
  text-transform: uppercase;

  /* animation: 2s ${changeColor} ease-in-out both infinite; */
`;

const Loading = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingPercent((loadingPercent) => loadingPercent + 1);
    }, 30);

    return () => {
      clearInterval(loadingInterval);
    };
  }, []);

  return (
    <Container>
      <Box>
        {/* Generate 15 Bars using Array.from */}
        {Array.from({ length: 15 }, (_, i) => (
          <Bar delay={i === 0 ? '200ms' : `${i * 200}ms`} key={i} />
        ))}
      </Box>
      <LoadingText>{`${loadingPercent}%`}</LoadingText>
    </Container>
  );
};

export default Loading;
