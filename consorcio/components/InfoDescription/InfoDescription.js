import { Col, Row } from "antd";
import { StyledCategoryCard } from "./InfoDescription.style";

const typesOptions = [
  {
    lineIconName: "file-invoice",
    link: "https://www.google.com.br",
    title: "Regulamento",
    description: "Acesse o contrato e demais informações importantes.",
  },
  {
    lineIconName: "id-card",
    link: "https://www.google.com.br",
    title: "Documentos",
    description: "Acesse a lista de documentos necessários.",
  },
];

const Content = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          borderBottom: "solid 1px var(--primary)",
          marginBottom: "40px",
        }}
      >
        <h3
          style={{
            color: "var(--primary)",
            fontSize: "35px",
            marginBottom: "10px",
          }}
        >
          Informações
        </h3>
      </div>
      <Row
        gutter={60}
        style={{
          paddingBottom: "85px",
          margin: "0 auto",
          maxWidth: "750px",
          marginTop: "60px",
        }}
      >
        {typesOptions.map(({ title, description, lineIconName }) => {
          return (
            <Col
              key={title}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              style={{ marginBottom: "20px" }}
            >
              <StyledCategoryCard>
                <div
                  style={{ display: "flex", gap: "16px", flexDirection: "row" }}
                >
                  <div>
                    <i
                      style={{ fontSize: "60px" }}
                      class={`las la-${lineIconName}`}
                    ></i>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "#3B3B3B",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {title}
                    </h4>
                    <p style={{ marginBottom: "40px", color: "#3B3B3B" }}>
                      {description}
                    </p>
                    <a
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "5px 40px",
                        border: "1px solid var(--primary)",
                        color: "var(--primary)",
                        backgroundColor: "transparent",
                      }}
                    >
                      ACESSAR
                    </a>
                  </div>
                </div>
              </StyledCategoryCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Content;
