const ErrorGroup = ({ errorMessages = [] }) => {
  return (
    errorMessages?.length !== 0 && (
      <div id="error-group" style={{ width: "60%", margin: "0 auto" }}>
        {" "}
        {errorMessages.map((message, indexKey) => (
          <center
            style={{ color: "red", fontWeight: "bold" }}
            key={message?.message + indexKey}
          >
            {" "}
            {message?.message}{" "}
          </center>
        ))}{" "}
      </div>
    )
  );
};

export default ErrorGroup;
