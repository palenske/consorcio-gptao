import { Text }  from "@labsmaisdigital/dsmaisevo";

export const CorrespondenteBB = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <img
        loading="lazy"
        src="/static/img/parceiros.png"
        width="100px"
        style={{ marginRight: "20px" }}
      />
      <Text size="ms" color="gray">
        Correspondente Bancário Digital do Banco do Brasil conforme resolução nº
        3.954 do Bacen
      </Text>
    </div>
  );
};

export default CorrespondenteBB;
