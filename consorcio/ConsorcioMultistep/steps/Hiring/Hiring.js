import { useState, useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import StepOne from "./HiringSteps/StepOne";
import StepTwo from "./HiringSteps/StepTwo";
import StepThree from "./HiringSteps/StepThree";
import scrollToTop from "../../../components/scrollToTop";



const Hiring = ({ extBackStep, extNextStep }) => {
  const [step, setStep] = useState(0);
  const [requestState, setRequestState] = useState(STATUS.INITIAL);
  const maxStep = 2;
  const backStep = () => (step > 0 ? setStep(step - 1) : extBackStep());
  const nextStep = () => (step < maxStep ? setStep(step + 1) : extNextStep());

  useEffect(() => {
    scrollToTop(0);
  }, [step]);

  const HiringSteps = [
    <StepOne
      key="StepOne"
      backStep={backStep}
      nextStep={nextStep}
      setRequestState={setRequestState}
    />,
    <StepTwo
      key="StepTwo"
      backStep={backStep}
      nextStep={nextStep}
      setRequestState={setRequestState}
    />,
    <StepThree
      key="StepThree"
      backStep={backStep}
      nextStep={nextStep}
      setRequestState={setRequestState}
    />,
  ];

  return (
    <>
      <ArrowLeftOutlined
        style={{
          position: "absolute",
          top: "6rem",
          color: "var(--primary)",
          fontSize: "30px",
        }}
        onClick={() => backStep()}
      />
      <StatusDisplay status={requestState} spin omitResponse>
        {HiringSteps[step]}
      </StatusDisplay>
    </>
  );
};

export default Hiring;
