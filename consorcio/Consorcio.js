import React, { useState } from "react";
import ConsortiumLeadForm from "./components/ConsortiumLeadForm";
import BasicDescription from "./components/BasicDescription";
import TypesDescription from "./components/TypesDescription";
import BenefitsDescription from "./components/BenefitsDescription";
import StepsDescription from "./components/StepsDescription";
// import InfoDescription from './components/InfoDescription';
import FaqDescription from "./components/FaqDescription";
import {
  StyledInnerContainer,
  StyledCategorySection,
  StyledGraySection,
  StyledWhiteSection,
  ExternalWrapper,
} from "./Consorcio.style";
import ConsorcioMultistep from "./ConsorcioMultistep";
import { useEffect } from "react";

import { startAttempt } from "../../integrations/requests/attempts";

export default function Consorcio() {
  const [isOnFlow, setIsOnFlow] = useState(false);
  const [locator, setLocator] = useState(undefined);
  const [isSolicitationSuccess, setIsSolicitationSuccess] = useState(false);
  const backToHome = () => setIsOnFlow(false);

  useEffect(() => {
    localStorage.removeItem("cdc-locator");
    const startConsortiumAttempt = async () => {
      const result = await startAttempt(() => {}, {
        service: "CONSORCIO",
      });
      localStorage.setItem("cdc-locator", result?.data?.sessionId);
    };
    startConsortiumAttempt();
  }, []);

  return (
    <>
      {isOnFlow ? (
        <ConsorcioMultistep backToHome={backToHome} />
      ) : (
        <ExternalWrapper>
          <AnimatedProductCover
            preTitle="Exclusivo para correntistas"
            title={`Consórcio  \nBanco do Brasil`}
            subtitle="Conquiste seu sonho de uma forma planejada e **sem pagar juros altos**"
            backgroundUrl="keys.png"
          >
            <ConsortiumLeadForm
              setLocator={setLocator}
              setIsSolicitationSuccess={setIsSolicitationSuccess}
              setIsOnFlow={setIsOnFlow}
            />
          </AnimatedProductCover>
          <StyledCategorySection>
            <StyledInnerContainer>
              <TypesDescription />
            </StyledInnerContainer>
          </StyledCategorySection>
          <BasicDescription />
          <StyledGraySection>
            <StyledInnerContainer>
              <BenefitsDescription />
            </StyledInnerContainer>
          </StyledGraySection>
          <StyledWhiteSection>
            <StyledInnerContainer>
              <StepsDescription />
            </StyledInnerContainer>
          </StyledWhiteSection>
          <StyledWhiteSection>
            <StyledInnerContainer>
              <FaqDescription />
            </StyledInnerContainer>
          </StyledWhiteSection>
        </ExternalWrapper>
      )}
    </>
  );
}
