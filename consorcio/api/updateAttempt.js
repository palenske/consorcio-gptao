import { updateAttempt }from "~integrations/requests/attempts";

const updateAttemptStep = async (stepData, currentStep, _nextStep) => {
  await updateAttempt(() => {}, {
    currentStep,
    nextStep: _nextStep,
    metadata: stepData,
  });
};

export default updateAttemptStep;