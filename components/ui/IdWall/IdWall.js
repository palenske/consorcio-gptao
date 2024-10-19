import { Button } from "antd";
import Script from "next/script";
import { useState, useEffect } from "react";
import { hasError } from "~lib/requests";
import { showError } from "~lib/toast";
import STATUS from "../../../data/status.json";
import {
  startReport,
  getReportStatus,
} from "../../../integrations/requests/idwall";

const scrollToTop = value => {
  window.scrollTo({
    behavior: "smooth",
    top: value,
  });
};
const IdWall = ({ onSuccess, setOnProgress, resetStep }) => {
  const [waitingIdw, setWaitingIdw] = useState(false);
  const [isReady, setReady] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [requestStatus, setRequestStatus] = useState(STATUS.INITIAL);

  const validateReportResult = reportId => {
    setTimeout(async () => {
      const reportResponse = await getReportStatus(setRequestStatus, reportId);

      if (hasError(reportResponse)) {
        showError("Ocorreu um erro ao validar o relatório.");
        setWaitingIdw(false);
        setInvalid(true);
      } else {
        const currentStatus = reportResponse?.data?.status;

        if (currentStatus === "PROCESSANDO") {
          validateReportResult(reportId);
          if (setOnProgress) {
            setOnProgress(true);
          }
        } else if (currentStatus === "INVALID") {
          setWaitingIdw(false);
          setInvalid(true);
        } else {
          setWaitingIdw(false);
          setReady(true);
          if (onSuccess) {
            onSuccess(reportResponse);
          }
        }
      }
    }, 3000);
  };

  const handleOnComplete = async token => {
    const reqResponse = await startReport(setRequestStatus, token);

    if (hasError(reqResponse)) {
      showError(reqResponse);
      setWaitingIdw(false);
      setInvalid(true);
    } else {
      sessionStorage.setItem("idwall-reportId", reqResponse?.data?.protocol);
      validateReportResult(reqResponse?.data?.protocol);
    }
  };

  const setupIdw = async () => {
    setTimeout(() => {
      idwSDKWeb({
        token: process.env.NEXT_PUBLIC_IDWALL_TOKEN,
        onRender: () => {},
        onComplete: ({ token, ...others }) => {
          setWaitingIdw(true);
          handleOnComplete(token);
        },
        onError: error => {
          alert(error);
        },
      });
    }, 2000);
  };

  useEffect(() => {
    // skip idwall widget if it's running on cypress, cypress can't solve idwall
    if (typeof window !== "undefined" && window.Cypress) {
      onSuccess();
    } else {
      setupIdw();
    }
  }, []);

  useEffect(() => {
    scrollToTop(170);
  }, [isReady, waitingIdw, isInvalid]);

  return (
    <center>
      <Script id="idwall" src="https://sdkweb-lib.idwall.co/index.js" />
      {isReady && (
        <h2 style={{ textAlign: "center", margin: "80px" }}>
          Sucesso interpretandos os documentos
        </h2>
      )}
      {waitingIdw && (
        <div style={{ width: "100%" }}>
          <h3
            style={{
              textAlign: "center",
              margin: "80px",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                src="/static/img/loading.svg"
                width={60}
                style={{ marginBottom: "60px" }}
              />
            </div>
            Estamos validando seus documentos, aguarde um momento...
          </h3>
          <p style={{ marginBottom: "60px" }}>
            Este processo pode demorar alguns minutos.
          </p>
        </div>
      )}
      {isInvalid && (
        <div style={{ width: "100%" }}>
          <h3
            style={{
              textAlign: "center",
              margin: "80px",
              marginBottom: "20px",
            }}
          >
            Não foi possível verificar sua identidade.
          </h3>
          <p style={{ marginBottom: "30px" }}>
            Revise os documentos e tente novamente.
          </p>
          <Button
            htmlType="submit"
            style={{
              width: "250px",
              height: "40px",
              color: "white",
              fontSize: "14px",
              backgroundColor: "#4D60E2",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
            onClick={() => {
              setWaitingIdw(false);
              setInvalid(false);
              resetStep();
            }}
          >
            Refazer processo
          </Button>
        </div>
      )}
      {!waitingIdw && !isInvalid && (
        <div data-idw-sdk-web style={{ zIndex: 1 }}></div>
      )}
    </center>
  );
};

export default IdWall;
