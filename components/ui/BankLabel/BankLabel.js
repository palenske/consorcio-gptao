import { Text } from "@labsmaisdigital/dsmaisevo";

export const BankLabel = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#FFEC41",
      cursor: "pointer",
    }}
    title="Correspondente Bancário Digital do Banco do Brasil conforme resolução
    nº 3.954 do Bacen"
    onClick={() => {
      if (typeof window !== "undefined") {
        window.location.href =
          "https://www.bb.com.br/site/pra-voce/emprestimo/emprestimo-pessoal/parceiros-bb/";
      }
    }}
  >
    <img
      loading="lazy"
      src="/static/img/parceiros.png"
      style={{ marginRight: "50px" }}
      alt="Correspondente Bancário Digital do Banco do Brasil conforme resolução
      nº 3.954 do Bacen"
      width="50px"
    />
    <Text color="#3d4dbf">
      Acesse a página oficial do Banco do Brasil e{" "}
      <u style={{ textUnderlineOffset: "2px" }}>confira</u>
    </Text>
  </div>
);

export default BankLabel;
