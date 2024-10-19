import styled from "styled-components";

const BusinessPartners = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 20px;
  flex-direction: row;


  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

`;

export { BusinessPartners };
