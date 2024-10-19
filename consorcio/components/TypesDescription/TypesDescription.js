import { Col, Row } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { StyledCategoryCard } from "./TypesDescription.style";

const typesOptions = [
  {
    lineIconName: "home",
    title: "Imóveis",
    description:
      "Conquiste a sua casa própria de uma maneira planejada e sem pagar caro por isso. O melhor? Você ainda pode utilizar o seu FGTS.",
  },
  {
    lineIconName: "car",
    title: "Veículos",
    description:
      "Conquiste seu veículo próprio, novo ou usado, de um jeito fácil. Além disso, parte do crédito pode ser usado para despesas de emplacamento e seguro.",
  },
  {
    lineIconName: "tractor",
    title: "Agro",
    description:
      "Compre, construa ou reforme! Consórcio para os seus tratores, máquinas e/ou implementos agrícolas. Você também pode investir na sua produção.",
  },
  {
    lineIconName: "couch",
    title: "Móveis, eletro e eletrônicos",
    description:
      "Compre móveis novos para sua casa ou escritório. Tudo de um jeito fácil, organizado e sem taxa de juros.",
  },
  {
    lineIconName: "gamepad",
    title: "Gamer",
    description:
      "Adquira computadores, consoles, kit headset, kit driving, videogames e outros com o BB Consórcio.",
  },
];

const TypesDescription = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          borderBottom: "solid 1px white",
          marginBottom: "40px",
        }}
      >
        <Text color="white" size="xl" weight="bold">
          Categorias
        </Text>
        <br />
        <br />
      </div>
      <Row gutter={20} style={{ maxWidth: "950px" }}>
        {typesOptions.map(({ title, description, lineIconName }) => {
          return (
            <Col
              key={title}
              xs={24}
              md={12}
              lg={8}
              style={{ marginBottom: "20px" }}
            >
              <StyledCategoryCard>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <i
                      style={{ fontSize: "30px" }}
                      class={`las la-${lineIconName}`}
                    />
                  </div>
                  <div>
                    <Text weight="light">{title}</Text>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Text size="">{description}</Text>
                </div>
              </StyledCategoryCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default TypesDescription;
