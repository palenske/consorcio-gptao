import STATUS from "../../../data/status.json";
import LoadingMessage from "~content/LoadingMessage";
import SuccessMessage from "~content/SuccessMessage";
import { Spin } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const StatusDisplay = ({
  status,
  omitSuccess = true,
  children,
  spin,
  omitResponse = false,
  pageSize = '100%',
}) => {
  const isError = status === STATUS.ERROR;
  const isLoading = status === STATUS.LOADING;
  const isSuccess = status === STATUS.SUCCESS;
  const shouldShowSuccess = isSuccess && !omitSuccess;

  return (
    <>
      {!omitResponse && (
        <div
          className="error-state"
          style={{ display: isError ? "block" : "none" }}
        >
          <center style={{ padding: 20 }}>Ocorreu um erro inesperado.</center>
        </div>
      )}
      <div
        className="initial-state"
        style={{
          display: (isSuccess && !omitSuccess) || isLoading ? "none" : "block",
        }}
      >
        {children}
      </div>
      <div
        className="loading-state"
        style={{
          display: isLoading ? "block" : "none",
          textAlign: "center",
          minHeight: pageSize ? pageSize : "46rem",
        }}
      >
        <LoadingMessage />
        {spin && (
          <Spin
            style={{
              borderRadius: "30px",
              padding: "15px",
            }}
            indicator={
              <SyncOutlined
                style={{ fontSize: 120, color: "var(--primary)" }}
                spin
              />
            }
          />
        )}
      </div>
      <div
        className="success-state"
        style={{ display: shouldShowSuccess ? "block" : "none" }}
      >
        <SuccessMessage />
      </div>
    </>
  );
};

export default StatusDisplay;
