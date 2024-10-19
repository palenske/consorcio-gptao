function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

const findMessages = (object, total = []) => {
  const localArr = [];

  Object.keys(object).forEach(objKey => {
    if (object[objKey].message) {
      localArr.push(object[objKey].message);
    } else if (typeof object[objKey] === "object") {
      localArr.push(findMessages(object[objKey]));
    }
  });

  return flatten([...total, localArr]);
};

const FormErrorList = ({ errors }) => {
  const errorCompleteList = findMessages(errors);

  return (
    Boolean(errorCompleteList?.length) && (
      <div id="error-group" style={{ marginTop: "30px" }}>
        <h4 style={{ color: "darkred" }}>
          Por favor verifique estes pontos no formulário:
        </h4>
        <div>
          {findMessages(errors).map(message => (
            <div key={message} style={{ color: "darkred" }}>
              {message}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default FormErrorList;
