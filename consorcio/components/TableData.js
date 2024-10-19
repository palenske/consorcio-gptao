import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";

export const headerColumns = (isChoose = false) => [
  {
    title: (
      <Text size="rg" weight="bolder">
        PARCELAS
      </Text>
    ),
    dataIndex: "parcelas",
    key: "parcelas",
    align: "center",
  },
  {
    title: (
      <Text size="rg" weight="bolder">
        MENOR LANCE{isChoose ? " " : <br />}CONTEMPLADO
      </Text>
    ),
    dataIndex: "menorLance",
    key: "menorLance",
    align: "center",
  },
  {
    title: (
      <Text size="rg" weight="bolder">
        NÚMERO DO
        <br />
        GRUPO
      </Text>
    ),
    dataIndex: "numeroGrupo",
    key: "numeroGrupo",
    align: "center",
  },
  {
    title: (
      <Text size="rg" weight="bolder">
        VAGAS
      </Text>
    ),
    dataIndex: "vagas",
    key: "vagas",
    align: "center",
  },
];

export const serializeDataColumns = (
  list,
  omitKey = "",
  isMobile,
  isChoose = false
) => {
  return list.map(plan => {
    const cols = {
      parcelas: (
        <>
          <Row align="middle" justify="center">
            <Text size="md" weight="bold" color="primary">
              {plan?.grupo.valorParcela.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Row>
          <Row justify={"center"}>
            <Text
              size="sm"
              color="grey"
            >{`${plan?.grupo.quantidadeMesesPrazo} parcelas`}</Text>
          </Row>
        </>
      ),
      menorLance: (
        <>
          <Row align="middle" justify="center" gutter={[5, 0]}>
            <Col>
              <Text size="md" weight="bold" color="primary">
                {`${plan?.menorLanceContemplacao.percentual?.toFixed(2)}%`}
              </Text>
            </Col>
            <Col>
              <Text weight="bold">do valor {!isMobile && "do bem"}</Text>
            </Col>
          </Row>
          <Row align="middle" justify="center">
            <Text size="sm" color="grey">
              {plan?.menorLanceContemplacao.valor.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Row>
        </>
      ),
      numeroGrupo: (
        <Row align="middle" justify="center">
          <Text size="md" weight="bolder">
            {plan?.grupo.codigoGrupo}
          </Text>
        </Row>
      ),
      vagas:
        isChoose || isMobile ? (
          <Row align="middle" justify="center">
            <Text size="rg">
              {plan?.grupo.quantidadeVagas <= 0
                ? "Em formação"
                : plan?.grupo.quantidadeVagas}
            </Text>
          </Row>
        ) : (
          <Row
            justify={isChoose ? "start" : "center"}
            style={{ paddingLeft: isChoose && "15px" }}
            align="middle"
          >
            <Col span={12}>
              <Text>
                {plan?.grupo.quantidadeVagas <= 0
                  ? "Em formação"
                  : plan?.grupo.quantidadeVagas}
              </Text>
            </Col>
            <Col span={12}>
              <Row justify="center" align="middle">
                <Text color="white">Selecionar</Text>
                <RightOutlined
                  style={{
                    fontSize: "20px",
                    strokeWidth: "36",
                    stroke: "white",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
              </Row>
            </Col>
          </Row>
        ),
    };
    delete cols[omitKey];
    return cols;
  });
};
