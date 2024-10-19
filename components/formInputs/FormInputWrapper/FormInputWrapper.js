import { get } from '~lib/object';

const FormInputWrapper = props => {
  const { id, label, errors, hideLabel } = props;
  const errMessage = get(errors, id, {})?.message;

  return (
    <div
      className={`form-spacer ${
        Boolean(errMessage) ? 'form-space__error' : ''
      }`}
      style={{
        display: "block",
        position: "relative",
        marginBottom: "15px",
      }}
    >
      {!hideLabel && <label htmlFor={id}>{label}</label>}
      {props.children}
      {errMessage && (
        <p
          style={{
            margin: "3px",
            marginBottom: "10px",
            fontSize: "14px",
            color: "#f34401",
          }}
        >
          {errMessage}
        </p>
      )}
    </div>
  );
};

export default FormInputWrapper;
