import { useEffect, useState } from "react";
import TabFilter from "~forms/maisbbcredito/Doadin/DoadinSteps/Final/components/TabFilter";
import {
  getPersonInfo,
  listTitulosDoadin,
} from "~integrations/requests/doadin";
import { hasError } from "~lib/requests";
import { showApiError } from "~lib/toast";
import STATUS from "data/status.json";
import StatusDisplay from "~ui/StatusDisplay";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { Space } from "antd";

export const ShowContracts = () => {
  const [reqStatus, setReqStatus] = useState(STATUS.INITIAL);
  const [titulosCliente, setTitulosCliente] = useState();
  const [currentCpf, setCurrentCpf] = useState();

  useEffect(() => {
    getContracts();
  }, []);

  useEffect(() => {}, [titulosCliente]);

  const getContracts = async () => {
    const resp = await listTitulosDoadin(setReqStatus);
    const msg = String(resp.response?.data?.message);
    if (
      resp.response?.data?.message &&
      msg.includes("Cliente ainda não possui títulos") !== -1
    ) {
    } else if (hasError(resp)) {
      showApiError(resp);
      return;
    }
    setTitulosCliente(resp.data?.titulosCliente ?? []);

    const getmeResponse = await getPersonInfo(setReqStatus);
    if (hasError(getmeResponse)) {
      showApiError(getmeResponse);
      return;
    }
    setCurrentCpf(getmeResponse.data?.props?.cpf);
  };

  return (
    <Space direction="vertical" size={15} style={{ width: "100%" }}>
      <Text color="primary" size="lg" weight="bold" decoration="underline">
        Meus DOADINS
      </Text>
      <Text size="md">Acompanhe aqui todos os seus DOADINS</Text>
      <StatusDisplay spin status={reqStatus} omitResponse>
        {titulosCliente && (
          <TabFilter items={titulosCliente} data={{ currentCpf }} />
        )}
      </StatusDisplay>
    </Space>
  );
};

export default ShowContracts;
