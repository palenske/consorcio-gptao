import { useEffect, useState } from "react";
import StepTwo from "./ConsortiumSimulationSteps/StepTwo/StepTwo";
import StepThree from "./ConsortiumSimulationSteps/StepThree";
import { ArrowLeftOutlined } from "@ant-design/icons";
import scrollToTop from "../../../components/scrollToTop";

const Simulation = ({ extBackStep, extNextStep }) => {
  const [step, setStep] = useState(0);
  const maxStep = 1;
  const backStep = () => (step > 0 ? setStep(step - 1) : extBackStep());
  const nextStep = () => (step < maxStep ? setStep(step + 1) : extNextStep());

  const SimulationSteps = [
    <StepTwo key="StepTwo" nextStep={nextStep} />,
    <StepThree key="StepThree" nextStep={nextStep} />,
  ];

  useEffect(() => {
    scrollToTop(0);
  }, [step]);

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
        {SimulationSteps[step]}
    </>
  );
};

export default Simulation;
