import { Col, Row } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";

const typesOptions = [
  {
    lineIconName: "mobile",
    title: "100% Digital",
    description:
      "Simule e contrate diretamente do site do Coban Mais Digital e no conforto do seu lar.",
  },
  {
    lineIconName: "percentage",
    title: "Taxas atrativas",
    description:
      "Sem taxa de adesão, juros e IOF. Dividimos a taxa de administração entre as parcelas.",
  },
  {
    lineIconName: "dollar-sign",
    title: "Mudar o valor do crédito",
    description:
      "Você pode alterar o valor do bem de referência antes da contemplação.",
  },
  {
    lineIconName: "calendar-check",
    title: "Escolha o prazo",
    description:
      "Veja a melhor opção de prazo para você dentro dos grupos disponíveis.",
  },
];

const Content = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          borderBottom: "solid 1px var(--primary)",
          marginBottom: "40px",
        }}
      >
        <Text color="primary" size="xl" weight="bold">
          Vantagens do BB Consórcio
        </Text>
        <br />
        <br />
      </div>
      <Row gutter={[40, 40]}>
        {typesOptions.map(({ title, description, lineIconName }) => {
          return (
            <Col
              key={title + lineIconName}
              xs={24}
              md={12}
              style={{ marginBottom: "20px", maxWidth: "450px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "row",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <i
                    style={{ fontSize: "60px" }}
                    class={`las la-${lineIconName}`}
                  />
                </div>
                <div>
                  <div style={{ marginBottom: "10px" }}>
                    <Text color="primary" weight="bolder" size="md">
                      {title}
                    </Text>
                  </div>
                  <Text color="primary">{description}</Text>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Content;
