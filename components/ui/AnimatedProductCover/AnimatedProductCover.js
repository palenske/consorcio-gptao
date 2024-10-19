import { Col, Row } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import ReactMarkdown from "react-markdown";
import {
  PatternGradient,
  PatternWrapper,
  PatternBackground,
  ExternalWrapper,
  Container,
  BackgroundPhoto,
} from "./AnimatedProductCover.style";
import BankLabel from "~ui/BankLabel";
import useWidget from "~hooks/useWidget";

export const AnimatedProductCover = ({
  title = "",
  preTitle = "",
  subtitle,
  children,
  backgroundUrl,
}) => {
  const { isWidget } = useWidget();

  return (
    <>
      <Container>
        <ExternalWrapper>
          <PatternGradient />
          <PatternWrapper>
            {[...Array(10)].map((_, index) => (
              <PatternBackground key={index} numb={index} />
            ))}
          </PatternWrapper>
        </ExternalWrapper>
        <Row
          align="middle"
          style={{ minHeight: "calc(100vh - 156px)", padding: "20px" }}
        >
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 14 }}
            xl={{ span: 13 }}
            xxl={{ span: 14 }}
          >
            <div
              style={{
                maxWidth: "566px",
                zIndex: "10",
                padding: "20px",
                paddingLeft: 0,
              }}
            >
              <Text size="md">
                <ReactMarkdown>{preTitle}</ReactMarkdown>
              </Text>
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Text size="xxl" color="primary">
                  <b>
                    <ReactMarkdown>{title}</ReactMarkdown>
                  </b>
                </Text>
              </div>
              <div>
                <Text size="lg">
                  <ReactMarkdown>{subtitle}</ReactMarkdown>
                </Text>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 24, order: 1 }}
            lg={{ span: 10, order: 2 }}
            xl={{ span: 7, order: 2 }}
            xxl={{ span: 8, order: 2 }}
          >
            {children}
          </Col>
        </Row>
      </Container>
      {!isWidget && <BankLabel />}
      <BackgroundPhoto url={backgroundUrl} />
    </>
  );
};

export default AnimatedProductCover;
