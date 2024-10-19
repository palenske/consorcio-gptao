import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  MainContainer,
  useWizard,
  Wizard,
  Text,
} from "@labsmaisdigital/dsmaisevo";
import { SuspenseLoader } from "../Consorcio.style";
import NoCreditScreen from "./components/NoCreditScreen";
import BBFooter from "../components/BBfooter/BBFooter";

import scrollToTop from "../components/scrollToTop";

const Simulation = dynamic(() => import("./steps/Simulation"), {
  suspense: true,
});
const ClientForm = dynamic(() => import("./steps/ClientForm"), {
  suspense: true,
});
const Hiring = dynamic(() => import("./steps/Hiring"), {
  suspense: true,
});

const ConsorcioMultistep = ({ backToHome }) => {
  const { data, data: { leadCreditLine } } = useConsortium();
  const { step, nextStep, prevStep, wizardRef } = useWizard({
    stepSize: 3,
  });

  const reset = () => {
    localStorage.clear();
    backToHome();
  };

  const locator = window.localStorage.getItem("cdc-locator");
  const creditValue = leadCreditLine ? leadCreditLine?.valorParcelaAdmitido : 0;

  useEffect(() => {
    scrollToTop(0);
  }, [step]);

  return (
    <>
      <MainContainer>
        {data?.leadForm && !creditValue > 0 ? (
          <NoCreditScreen backStep={reset}/>
        ) : (
          <div style={{ marginTop: "5.4rem" }}>
            <Suspense fallback={<SuspenseLoader />}>
              {locator && (
                <div style={{ textAlign: "end", margin: "2rem 0" }}>
                  <Text weight="bold">
                    Localizador: <b>{locator}</b>
                  </Text>
                </div>
              )}
              <Wizard step={step} ref={wizardRef}>
                <div stepName="Simulação">
                  <Simulation extBackStep={reset} extNextStep={nextStep} />
                </div>
                <div stepName="Preencha seus dados">
                  <ClientForm extBackStep={prevStep} extNextStep={nextStep} />
                </div>
                <div stepName="Contratação">
                  <Hiring extBackStep={prevStep} />
                </div>
              </Wizard>
            </Suspense>
          </div>
        )}
      </MainContainer>
      <BBFooter />
    </>
  );
};

export default ConsorcioMultistep;
