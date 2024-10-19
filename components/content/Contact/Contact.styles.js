import styled from "styled-components";

export const StyledImgWrapper = styled.div`
  position: relative;
  z-index: 1;
  &:before {
    content: " ";
    background-color: var(--primary);
    border-radius: 20px;
    width: 25%;
    height: 25%;
    position: absolute;
    top: 132px;
    display: block;
    z-index: -1;
    left: 0;
    top: 0;
  }
`;

export const StyledImg = styled.img`
  maxwidth: 500px;
  width: 100%;
`;
