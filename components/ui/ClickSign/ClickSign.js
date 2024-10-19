import { useEffect } from "react";

const ClickSign = ({ onSuccess }) => {
  // const [waitingIdw, setWaitingIdw] = useState(false);
  // const [isReady, setReady] = useState(false);
  // const [isInvalid, setInvalid] = useState(false);
  // const [requestStatus, setRequestStatus] = useState(STATUS.INITIAL);

  // const validateReportResult = (reportId) => {
  //   setTimeout(async () => {
  //     const detachedResponse = await getReportStatus(
  //       setRequestStatus,
  //       reportId

  //     );

  //     const currentStatus = detachedResponse?.data?.validationResult;

  //     if (currentStatus === "PRE-PROCESSANDO" || currentStatus === "PROCESSANDO") {
  //       validateReportResult(reportId);
  //     } else if (currentStatus === "INVALID") {
  //       setWaitingIdw(false);
  //       setInvalid(true);
  //     } else {
  //       setWaitingIdw(false);
  //       setReady(true)
  //       onSuccess(reportId)
  //     }
  //   }, 2000)
  // }

  // const handleOnComplete = async (token) => {
  //   const detachedResponse = await startReport(
  //     setRequestStatus,
  //     token
  //   );

  //   validateReportResult(detachedResponse?.data?.reportNumber)
  // }

  const setupIdw = async () => {
    setTimeout(() => {
      // Carrega o widget embedded com a request_signature_key
      var widget = new window.Clicksign("fe24f9e9-73f6-44a0-925a-453e3187e985");

      // Define o endpoint https://sandbox.clicksign.com ou https://app.clicksign.com
      widget.endpoint = "https://app.clicksign.com";

      // Define a URL de origem (parametro necessário para utilizar através de WebView)
      widget.origin = "https://www.cobanmaisdigital.com.br/";

      // Monta o widget no div
      widget.mount("container");

      // idwSDKWeb({
      //   token: 'U2FsdGVkX1/wFAk8bmJz0LhXekKVVmAwV1THMtjppa2gNZeskw==',
      //   onRender: () => {
      //   },
      //   onComplete: ({ token, ...others }) => {
      //     setWaitingIdw(true);
      //     handleOnComplete(token)

      //   },
      //   onError: (error) => {
      //     alert(error);
      //   }
      // });
    }, 1000);
  };

  useEffect(() => {
    setupIdw();
  }, []);

  return (
    <>
      <div id="container"></div>
      {/* <Script
        id="idwall"
        src="https://sdkweb-lib.idwall.co/index.js"
      />
      <div style={{ width: "100%", padding: "60px" }}>
        <div
          style={{
            width: "600px",
            margin: "0 auto",
          }}
        >
          {isReady && <h2 style={{ textAlign: 'center', margin: '80px' }}>Sucesso interpretandos os documentos</h2>}
          {waitingIdw && <h2 style={{ textAlign: 'center', margin: '80px' }}>Analisando documentos idwall</h2>}
          {isInvalid && <h2 style={{ textAlign: 'center', margin: '80px' }}>Não foi possível verificar sua identidade. Revise os documentos e tente novamente.</h2>}
          {(!waitingIdw && !isInvalid) && <div data-idw-sdk-web></div>}
        </div>
      </div> */}
    </>
  );
};

export default ClickSign;
