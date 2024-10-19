import { Collapse } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";

const { Panel } = Collapse;

const list = [
  {
    question: "Como compõe o valor da minha parcela?",
    answer: "Como compõe o valor da minha parcela?",
  },
  {
    question:
      "É permitido debitar a parcela em conta corrente que não seja do consorciado?",
    answer:
      "É permitido debitar a parcela em conta corrente que não seja do consorciado?",
  },
  {
    question: "Como tenho direito ao bem que estou pagando?",
    answer: "Como tenho direito ao bem que estou pagando?",
  },
  {
    question: "Como compõe o valor da minha parcela?",
    answer: "Como compõe o valor da minha parcela?",
  },
  {
    question:
      "É permitido debitar a parcela em conta corrente que não seja do consorciado?",
    answer:
      "É permitido debitar a parcela em conta corrente que não seja do consorciado?",
  },
  {
    question: "Como tenho direito ao bem que estou pagando?",
    answer: "Como tenho direito ao bem que estou pagando?",
  },
  {
    question: "Como compõe o valor da minha parcela?",
    answer: "Como compõe o valor da minha parcela?",
  },
  {
    question:
      "É permitido debitar a parcela em conta corrente que não seja do consorciado?",
    answer:
      "É permitido debitar a parcela em conta corrente que não seja do consorciado?",
  },
  {
    question: "Como tenho direito ao bem que estou pagando?",
    answer: "Como tenho direito ao bem que estou pagando?",
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
          Dúvidas frequentes
        </Text>
        <br />
        <br />
      </div>
      <div style={{ marginBottom: "100px", padding: "40px 0 " }}>
        <Collapse defaultActiveKey={["1"]} bordered={false}>
          {list.map(({ question, answer }) => {
            return (
              <Panel
                key={question}
                header={<Text weight="bold">{question}</Text>}
              >
                <Text>{answer}</Text>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </>
  );
};

export default Content;
