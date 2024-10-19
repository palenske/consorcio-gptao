import styled from "styled-components";

const Image = styled.img`
  ${({ src }) => `src: ${src}`}
  width: 100%;
  max-width: 600px;
  margin-top: 60px;
`;

const PartnerTitle = styled.h2`
  margin-bottom: 0;
  padding-bottom: 0;
`;

const MainTitle = styled.h2`
  margin-bottom: 16px;
`;

export { Image, PartnerTitle, MainTitle };
