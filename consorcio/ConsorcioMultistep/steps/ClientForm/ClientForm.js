import { useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import FormOne from "./ConsortiumFormSteps/FormOne";
import FormTwo from "./ConsortiumFormSteps/FormTwo";
import FormThree from "./ConsortiumFormSteps/FormThree";


import scrollToTop from "../../../components/scrollToTop";

const ClientForm = ({ extBackStep, extNextStep }) => {
  const [step, setStep] = useState(0);
  const [requestState, setRequestState] = useState(STATUS.INITIAL);
  const maxStep = 1;
  const backStep = () => (step > 0 ? setStep(step - 1) : extBackStep());
  const nextStep = () => (step < maxStep ? setStep(step + 1) : extNextStep());

  useEffect(() => {
    scrollToTop(0);
  }, [step]);

  const ClientFormSteps = [
    <FormOne
      key="FormOne"
      setRequestState={setRequestState}
      backStep={backStep}
      nextStep={nextStep}
    />,
    <FormTwo
      key="FormTwo"
      setRequestState={setRequestState}
      backStep={backStep}
      nextStep={nextStep}
    />,
    <FormThree
      key="FormThree"
      setRequestState={setRequestState}
      backStep={backStep}
      nextStep={nextStep}
    />,
  ];

  return (
    <>
      <ArrowLeftOutlined
        style={{
          position: "absolute",
          cursor: "pointer",
          top: "6.7rem",
          left: "1rem",
          color: "var(--primary)",
          fontSize: "30px",
        }}
        onClick={backStep}
      />
      <StatusDisplay status={requestState} spin omitResponse>
        <div style={{ margin: 'auto', width: '90%'}}>{ClientFormSteps[step]}</div>
      </StatusDisplay>
    </>
  );
};

export default ClientForm;
