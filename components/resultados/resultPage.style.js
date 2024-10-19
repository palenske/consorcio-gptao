import styled from "styled-components";

const ExternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 620px;
  margin: auto;
  padding: 0;

  @media screen and (max-width: 574px) {
    max-width: 380px;
    text-align: center;
  }
`;

const MainIcon = styled.div`
  i {
    font-size: 148px;
    color: ${({ color }) => color};
  }
`;

const ContactContent = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  i {
    color: #27ae60;
    font-size: 32px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 10px;
`;

const DescriptionContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SuccessAlertContainer = styled.div`
  padding: 12px 18px;
  border: 1px solid #969696;
  border-radius: 4px;
  margin-top: 24px;
  margin-bottom: 48px;
`;

export {
  ExternalContainer,
  MainIcon,
  ContactContent,
  TitleContainer,
  DescriptionContainer,
  SuccessAlertContainer,
};
