import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyle";

const changeColor = keyframes`
  0% { color: ${colors.darkGrey}}
  100% { color: ${colors.primaryColor} }
`;

const fillBar = keyframes`
  0% {
    background: transparent;
  }
  100% {
    background: ${colors.primaryColor};
  }
`;

const Box = styled.div`
  display: flex;
  width: 400px;
  height: 30px;
  border: 1px solid ${colors.primaryColor};
  margin-bottom: 20px;
`;

const Bar = styled.div`
  width: 10%;
  height: 100%;
  animation: ${fillBar} cubic-bezier(0.075, 0.82, 0.165, 1) both infinite;
  animation-delay: ${({ delay }) => (delay ? delay : "300ms")};
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

  animation: 2s ${changeColor} ease-in-out both infinite;
`;

const myArr = Array.from({ length: 8 }, (_, i) => (
  <Bar delay={i === 0 ? "200ms" : `${i * 200}ms`} />
));

const Loading = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Box>
          {Array.from({ length: 15 }, (_, i) => (
            <Bar delay={i === 0 ? "200ms" : `${i * 200}ms`} />
          ))}
        </Box>
        <LoadingText>Loading</LoadingText>
      </Container>
    </>
  );
};

export default Loading;

/*
          <Bar delay="200ms" />
          <Bar delay="400ms" />
          <Bar delay="600ms" />
          <Bar delay="800ms" />
          <Bar delay="1s" />
          <Bar delay="1.2s" />
          <Bar delay="1.4s" />
          <Bar delay="1.6s" />
          <Bar delay="1.8s" />
          <Bar delay="2.2s" />
          <Bar delay="2.4s" />
          <Bar delay="2.6s" />
          <Bar delay="2.8s" />
*/
