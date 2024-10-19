import { updateAttempt } from "../../integrations/requests/attempts";
import { consortiumCheckCreditLine } from "../../integrations/requests/consortium";
import { hasError } from "../../lib/requests";
import { onlyNumbers } from "../../lib/string";
import { showError } from "../../lib/toast";

const getCreditLine = async (setRequestStatus, numeroInscricaoCliente) => {
  const response = await consortiumCheckCreditLine(setRequestStatus, {
    numeroInscricaoCliente: Number(onlyNumbers(numeroInscricaoCliente)),
    valorParcelaInicio: 0,
    codigoTipoAnalise: 1,
    tipoInscricao: "F",
  });
  const valorParcelaAdmitido = response.data?.valorParcelaAdmitido ?? 0;

  if (hasError(response)) {
    await updateAttempt(() => {}, {
      currentStep: "ANALISE_CREDITO",
      nextStep: "ERRO_ANALISE_CREDITO",
      metadata: response.data,
    });
    showError(response);
    return response.data;
  } else {
    if (valorParcelaAdmitido > 0) {
      await updateAttempt(() => {}, {
        currentStep: "ANALISE_CREDITO",
        nextStep: "BEM_REFERENCIA",
        metadata: response.data,
      });
    } else {
      await updateAttempt(() => {}, {
        currentStep: "ANALISE_CREDITO",
        nextStep: "SEM_LINHA_CREDITO_CONSORCIO",
        metadata: response.data,
      });
    }
    return response.data;
  }
};

export default getCreditLine;
