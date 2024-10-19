import { useState } from "react";
import { Row, Modal, Button as AntButton, Space } from "antd";
import VerificationInput from "react-verification-input";
import CountdownTimer from "~ui/CountdownTimer";
import { Text }  from "@labsmaisdigital/dsmaisevo";

const TwoFactorModal = ({
  phone,
  email,
  hasChosen,
  isFAVisible,
  handleSendCode,
  handleVerifyCode,
  setEnableCancel,
  enableCancel,
  onCancel,
  emailOnly = false,
}) => {
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [option, setOption] = useState();

  const resetModalConfig = () => {
    setIsTimeOut(false);
    setOption();
    onCancel();
  };

  const maskedPhone = phoneNumber => {
    const _phone = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      7
    )}-${phoneNumber.slice(7)}`;
    let _masked = [];
    for (const key in _phone) {
      if ((key >= 5 && key <= 7) || (key >= 11 && key <= 12)) {
        _masked.push("*");
      } else {
        _masked.push(_phone[key]);
      }
    }
    return Array(_masked).join("").replaceAll(",", "");
  };

  const maskedEmail = currentEmail => {
    const posArroba = String(currentEmail).indexOf("@");
    const posFinal = String(currentEmail).indexOf(".", posArroba);
    let _masked = [];
    for (const key in currentEmail) {
      if (
        (key >= 3 && key < posArroba) ||
        (key >= posArroba + 3 && key < posFinal)
      ) {
        _masked.push("*");
      } else {
        _masked.push(currentEmail[key]);
      }
    }
    return Array(_masked).join("").replaceAll(",", "");
  };

  const sendTwoFA = type => {
    setOption(type);
    handleSendCode(type);
  };

  const handleResend = () => {
    sendTwoFA(option);
    setIsTimeOut(false);
    setEnableCancel(false);
  };

  return (
    <Modal
      destroyOnClose
      title={
        !hasChosen ? (
          <Text
            style={{ margin: "16px 0" }}
            size="md"
            weight="bold"
            color="primary"
          >
            Valide sua conta!
          </Text>
        ) : (
          <Text
            style={{ margin: "16px 0" }}
            size="md"
            weight="bold"
            color="primary"
          >
            {`Validação por ${option == "WHATSAPP" ? "celular" : "e-mail"}`}
          </Text>
        )
      }
      style={{ maxWidth: "95%" }}
      bodyStyle={{
        textAlign: "center",
        justifyContent: "center",
      }}
      footer={null}
      closable={hasChosen ? enableCancel : true}
      visible={isFAVisible}
      maskClosable={false}
      onCancel={hasChosen && !isTimeOut ? () => {} : resetModalConfig}
    >
      {!hasChosen ? (
        <Row justify="center">
          <Text size="lg" style={{ marginBottom: "35px" }}>
            {emailOnly
              ? "Verificação de titular da conta"
              : "Escolha uma forma de validar a sua conta pelos seguintes meios:"}
          </Text>
          <div style={{ display: emailOnly && "none" }}>
            <Row style={{ paddingLeft: "24px", gap: "14px" }}>
              <img src="/static/img/2fa/phone_2fa.png" />
              <AntButton
                id="2fa-recieve-by-zap"
                type="link"
                onClick={() => sendTwoFA("WHATSAPP")}
              >
                <Text toggleMargin={false} size="sm" color="black">
                  <u>
                    Receba o código via{" "}
                    <b style={{ color: "#48c315" }}>Whatsapp</b>
                  </u>
                </Text>
              </AntButton>
            </Row>
            {/* <Divider
              type="horizontal"
              style={{
                margin: "27px 0",
                width: "80%",
                backgroundColor: "black",
              }}
            /> */}
          </div>
          {emailOnly && (
            <Row style={{ gap: "10px", minHeight: emailOnly && "2rem" }}>
              <img src="/static/img/2fa/mail_2fa.png" />
              <AntButton
                id="2fa-recieve-by-mail"
                type="link"
                onClick={() => sendTwoFA("EMAIL")}
              >
                <Text toggleMargin={false} size="sm" color="black">
                  <u>Receba o código via E-mail</u>
                </Text>
              </AntButton>
            </Row>
          )}
        </Row>
      ) : (
        <>
          <Space direction="vertical">
            {option === "WHATSAPP" ? (
              <>
                <img src="/static/img/2fa/phone_2fa.png" />
                <Text size="md">
                  Por razões de segurança enviamos um código de 6 dígitos para o
                  celular abaixo:
                </Text>
                <Text weight="bold" size="md">
                  {maskedPhone(phone.match(/\d+/g).join(""))}
                </Text>
              </>
            ) : (
              <>
                <img src="/static/img/2fa/mail_2fa.png" />
                <Text size="md">
                  Por razões de segurança enviamos um código de 6 dígitos para o
                  email abaixo:
                </Text>
                <Text size="md">{maskedEmail(email)}</Text>
              </>
            )}

            <Text toggleMargin={false} size="sm" weight="bold">
              Insira o código abaixo
            </Text>
            <center>
              <VerificationInput
                inputProps={{ disabled: isTimeOut, inputmode: "numeric" }}
                placeholder=""
                validChars="z0-9"
                removeDefaultStyles
                autoFocus
                classNames={{
                  container: "verify-container",
                  character: `verify-character${
                    isTimeOut ? " verify-character-timeout" : ""
                  }`,
                  characterInactive: "character--inactive",
                  characterSelected: isTimeOut ? "" : "character--selected",
                }}
                onChange={value => handleVerifyCode(value)}
              />
            </center>
            {isTimeOut ? (
              <>
                <AntButton
                  id="2fa-resend-code"
                  type="link"
                  onClick={handleResend}
                >
                  <Text toggleMargin={false} color="red" size="sm">
                    Tempo esgotado.{" "}
                    <u>
                      <i>Reenviar código agora.</i>
                    </u>
                  </Text>
                </AntButton>
              </>
            ) : (
              <CountdownTimer
                setIsTimeOut={setIsTimeOut}
                initialMinute={2}
                initialSeconds={30}
                setEnableCancel={setEnableCancel}
              />
            )}
          </Space>
        </>
      )}
    </Modal>
  );
};

export default TwoFactorModal;
