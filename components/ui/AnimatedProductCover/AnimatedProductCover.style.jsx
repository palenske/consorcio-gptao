import styled from "styled-components";

export const PatternGradient = styled.div`
  width: 100%;
  height: 100%;
  content: " ";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(0, 212, 255, 0) 200%
  );
  z-index: -1;
  overflow: hidden;
  position: absolute;
`;

export const PatternWrapper = styled.div`
  opacity: 0.15;
  overflow: hidden;
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: -2;
  filter: grayscale(1);
`;

export const PatternBackground = styled.div`
  width: 3600px;
  height: 220px;
  content: " ";
  background: url(/static/img/logo-pattern.svg);
  background-size: 220px;
  background-repeat: repeat-x;
  animation: scroll 600s infinite linear;
`;

export const ExternalWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: calc(100vh);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

const menuHeight = 112;
const bankLabelHeight = 56;

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - ${menuHeight + bankLabelHeight}px);
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 110px;

  ul {
    margin-top: 20px;
  }
`;

export const BackgroundPhoto = styled.div`
  width: 35%;
  min-height: calc(100vh - ${menuHeight + bankLabelHeight}px);
  content: " ";
  background: url(/static/img/products/${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -2;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;
