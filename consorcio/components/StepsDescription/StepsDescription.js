import { Col, Row } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";

const typesOptions = [
  {
    position: "1",
    title: "Simulação",
    description:
      "Consórcio pelo valor do bem, ou pelo valor da parcela que cabe no seu bolso. Você escolhe!",
  },
  {
    position: "2",
    title: "Contratação",
    description:
      "Caso a simulação fique dentro do seu orçamento, você realiza a contratação.",
  },
  {
    position: "3",
    title: "Assembleia",
    description:
      "Todos os meses ocorrem as assembleias. Nesse momento, acontecem as contemplações, sejam por lance ou sorteio.",
  },
  {
    position: "4",
    title: "Oferta de lance",
    description:
      "Faça um lance para ser contemplado mais rápido. Os maiores lances levam.",
  },
  {
    position: "5",
    title: "Contemplação",
    description: "O momento em que é disponibilizada a carta de crédito.",
  },
  {
    position: "6",
    title: "Realização",
    description:
      "Com a carta de crédito em mãos, de acordo com o segmento da cota, é hora de realizar a compra do bem desejado",
  },
];

const Content = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          borderBottom: "solid 1px var(--primary)",
          marginBottom: "40px",
        }}
      >
        <Text color="primary" size="xl" weight="bold">
          Passo a passo
        </Text>
        <br />
        <br />
      </div>
      <Row
        align="bottom"
        gutter={[25, 50]}
        style={{
          width: "100%",
          margin: "auto",
          padding: "3rem 1.5rem 1.5rem",
          backgroundColor: "var(--primary)",
          alignItems: "start",
        }}
      >
        {typesOptions.map(({ title, description, position }) => {
          return (
            <Col
              key={title}
              sm={24}
              md={12}
              lg={8}
              style={{
                padding: "1rem 0.5rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "row",
                  alignItems: "start",
                  maxWidth: "86%",
                }}
              >
                <span style={{ transform: "translateY(-10px)" }}>
                  <Text color="white" size="xxl" weight="bolder">
                    {position}
                  </Text>
                </span>
                <div>
                  <div style={{ marginBottom: "5px" }}>
                    <Text color="white" size="md" weight="bold">
                      {title}
                    </Text>
                  </div>
                  <Text color="white" size="sm">
                    {description}
                  </Text>
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
