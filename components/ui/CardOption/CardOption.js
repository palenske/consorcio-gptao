import { Text, Button } from "@labsmaisdigital/dsmaisevo";
import { Card, Col, Row } from "antd";

const CardOption = ({ title, text, details, nextStep, disabled = false }) => {
  return (
    <div style={{ position: "relative", margin: "20px auto", width: '80%' }}>
      <Card
        style={{
          border: "0.5px solid rgba(128,128,128, 0.3)",
          borderRadius: "4px",
        }}
      >
        <Row align="middle" justify="center">
          <Col sm={24} md={16}>
            <div
              style={{
                padding: "10px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Text color="grey" weight="bold">
                {title}
              </Text>
              <br />
              <br />
              <Text color="primary" weight="bold">
                {text}
              </Text>
              <br />
              <Text color="grey" size="sm">
                {details}
              </Text>
            </div>
          </Col>
          <Col sm={24} md={8}>
            <div style={{ float: "right" }}>
              <Button
                onClick={() => {
                  nextStep();
                }}
                size="extra"
                disabled={disabled}
                text="Selecionar opção"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CardOption;
