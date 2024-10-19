import { Row } from "antd";
import styled from "styled-components";

const StyledContainerWithBackground = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 0) 70%
    ),
    url(/static/img/senior-success.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: top;
  background-position-x: center;
  width: 100%;
  padding-top: 50px;

  @media (max-width: 900px) {
    padding-top: 100px;
    min-height: auto;
  }
`;

const StyledCardContainer = styled.div`
  margin: 0 auto;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.039));
  background-color: #ffffff;
  width: 90%;
  max-width: 800px;
  text-align: center;
  border-radius: 30px;
  margin-bottom: 2rem;
  margin-top: 250px;
  @media screen and (max-width: 650px){
    margin-top: 0;
  }
`;

const StyledSuccessMarkWrapper = styled.div`
  display: inline-block;
  background-color: #44a54a;

  margin-top: 40px;
  border-radius: 100%;
`;

const StyledCardContent = styled.div`
  padding: 40px 60px;
  @media screen and (max-width: 650px){
    padding: 10px 15px;
    
  }
`;

const ContentGray = styled.div`
  background-color: #E7E7E7 ;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 450px;
  margin: 0 auto;
`;

const IconRow = styled(Row)`
text-align: center;
align-items: center;
justify-content: center;
margin-top: 0.5rem;
`;

export {
  StyledContainerWithBackground,
  StyledCardContainer,
  StyledSuccessMarkWrapper,
  StyledCardContent,
  ContentGray,
  IconRow
};
