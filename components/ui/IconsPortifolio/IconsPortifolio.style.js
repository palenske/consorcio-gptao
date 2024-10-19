import styled from "styled-components";

const ExternalContainer = styled.div`
  padding: 67px 10%;
  background: ${({ color }) => color};

  @media screen and (max-width: 450px) {
    padding: 20px 4%;
  }
`;

const Spacer = styled.div`
  height: ${({ size }) => (size ? `${size}px` : "10px")};
  display: ${({ disabeInDesk }) => (disabeInDesk ? "none" : "block")};
  @media screen and (max-width: 450px) {
    height: ${({ size }) => (size ? `${size / 1.8}px` : "5px")};
    display: ${({ disabeInMobile }) => (disabeInMobile ? "none" : "block")};
  }
`;

export { ExternalContainer, Spacer };
