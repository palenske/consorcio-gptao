export const errorsMap = {
  NEED_MOVIMENT: {
    status: "Empréstimo não contratado",
    icon: "wallet",
    title: "Conta não movimentada.",
    description:
      "A solicitação de empréstimo não pode ser concluída porque a conta está **sem movimentação**.\n\n" +
      "A conta precisa de uma movimentação de qualquer valor para habilitá-la. Sendo assim, basta fazer:\n" +
      "\n‎\n\n" +
      "- Uma transferência, como um PIX.\n" +
      "- Pagamento de boletos Essas ações realizarão a ativação da conta.\n\n" +
      "O reconhecimento das ações no banco ocorre de **um dia útil** para outro. Assim que tiver feito basta tentar novamente.\n" +
      "Nosso time está a disposição para demais dúvidas, caso deseje auxilio nesse processo entre em contato com nossa equipe.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de movimentação de conta, gostaria de auxílio para concluir.",
  },
  INVALID_CNPJ: {
    status: "Empréstimo não contratado",
    icon: "exclamation-triangle",
    title: "O CNPJ informado não é válido.",
    description:
      "A solicitação de empréstimo não pode ser concluída porque o documento informado é inválido.\n" +
      "Por gentileza, realize os passos novamente informando seu CPF, agência e conta do Banco do Brasil.\n" +
      "\n‎\n\n" +
      "Nosso time está a disposição para demais dúvidas, caso deseje auxilio nesse processo entre em contato com nossa equipe.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de CNPJ inválido e gostaria de auxílio para concluir.",
  },
  ANOTHER_CONTRACT_PROGRESS: {
    status: "Empréstimo não contratado",
    icon: "university",
    title:
      "Você possui uma proposta em andamento. Equanto estiver com uma renovação pendente não é possível realizar outra.",
    description:
      "A solicitação de empréstimo não pode ser concluída porque já existe uma proposta em andamento para você. Neste caso, é necessário finalizá-la para que seja possível realizar uma nova análise de crédito e contratação de empréstimo.\n" +
      "\n‎\n\n" +
      "Nosso time está a disposição para demais dúvidas, caso deseje auxilio nesse processo entre em contato com nossa equipe.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de proposta em andamento, gostaria de auxílio para concluir.",
  },
  UNSUPPORTED_VALUE: {
    status: "Empréstimo não contratado",
    icon: "exclamation-triangle",
    title: "Valor da prestação solicitado superior ao permitido.",
    description:
      "A solicitação de empréstimo não pode ser concluída porque o valor permitido ultrapassou seu limite disponível. Será necessário fazer uma nova simulação com outros valores e quantidades de parcelas.\n" +
      "\n‎\n\n" +
      "Nosso time está a disposição para demais dúvidas, caso deseje auxilio nesse processo entre em contato com nossa equipe.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de valor da prestação superior ao permitido e gostaria de auxílio para concluir.",
  },
  BLOCKED_LOAN: {
    status: "Empréstimo não contratado",
    icon: "exclamation-triangle",
    title: "Cliente possui bloqueio para empréstimos no sistema GRB.",
    description:
      "A solicitação de empréstimo não pode ser concluída porque o sistema apresentou um bloqueio para empréstimo.\n\n" +
      "Procure uma agência mais próxima para mais informações.",
    actionType: "ENCONTRAR_AGENCIAS",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de bloqueio no sistema GRB, gostaria de auxílio para concluir.",
  },
  NOT_AVAILABLE: {
    status: "Empréstimo não contratado",
    icon: "exclamation-triangle",
    title: "Contratação não disponível",
    description:
      "O sistema apresentou um erro inesperado ao tentar realizar a contratação do seu empréstimo.\n" +
      "\n‎\n\n" +
      "Por favor, entre em contato com nosso time para auxilio nesse processo através das opções abaixo.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de contratação não disponível, gostaria de auxílio para concluir.",
  },
  READ_TIMED_OUT: {
    status: "Empréstimo não contratado",
    icon: "exclamation-triangle",
    title: "Erro de comunicação com o sistema",
    description:
      "O sistema apresentou um erro inesperado ao tentar realizar a contratação do seu empréstimo.\n" +
      "\n‎\n\n" +
      "Por favor, entre em contato com nosso time para auxilio nesse processo através das opções abaixo.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro: Read timed out e gostaria de auxílio para concluir.",
  },
  SAVER: {
    status: "Empréstimo não contratado",
    icon: "exclamation-triangle",
    title: "Contratação para poupador não permitida para este canal.",
    description:
      "A solicitação de empréstimo não pode ser concluída porque não é permitido contratação pra conta poupança. É possível tentar novamente com uma conta corrente comum ou acessar o app e solicitar para que sua conta se torne uma conta corrente.\n" +
      "\n‎\n\n" +
      "Nosso time está a disposição para demais dúvidas, caso deseje auxilio nesse processo entre em contato com nossa equipe.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro de contratação para poupador não permitida para este canal, gostaria de auxílio para concluir.",
  },
  DEFAULT: {
    status: "ERRO :(",
    icon: "exclamation-triangle",
    title: "ERROR",
    description:
      "Ocorreu um erro inesperado\n" +
      "\n‎\n\n" +
      "Nosso time está a disposição para demais dúvidas, caso deseje auxilio nesse processo entre em contato com nossa equipe.",
    actionType: "CONTATO",
    client_message:
      "Olá! Tentei realizar um empréstimo, mas apareceu um erro. Gostaria de auxílio para concluir.",
  },
};
