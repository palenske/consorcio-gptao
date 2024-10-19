const NextStepButton = ({
  step,
  stepToShow,
  nextStep,
  beforeNextStep,
  disabled = false,
  text = "Avançar",
}) => {
  return (
    step === stepToShow && (
      <div
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
        }}
      >
        <button
          disabled={disabled}
          type="button"
          className="btn btn-lg btn-block"
          style={{
            margin: "20px auto",
            padding: "17px 60px",
            width: "initial",
            marginBottom: "60px",
            color: "white",
            backgroundColor: "#4D60E2",
          }}
          onClick={() => {
            if (beforeNextStep) {
              beforeNextStep();
            }
            nextStep();
          }}
        >
          <b>{text}</b>
        </button>
      </div>
    )
  );
};

export default NextStepButton;
