import { Text } from "@labsmaisdigital/dsmaisevo";
import { errorsMap } from "~data/cdc/errorsMap";
import ReactMarkdown from "react-markdown";
import {
  ContactContent,
  DescriptionContainer,
  ExternalContainer,
  MainIcon,
  TitleContainer,
} from "./resultPage.style";

export const ErrorPage = ({ errorName }) => {
  const { status, title, icon, description, actionType, client_message } =
    errorsMap[errorName || "DEFAULT"];

  const Action = {
    CONTATO: (
      <a
        href={`https://whatsa.me/5561996766840/?t=${client_message}`}
        target="_blank"
      >
        <ContactContent>
          <i class="lab la-whatsapp" />
          <Text weight="bolder">FALAR COM ATENDENTE</Text>
        </ContactContent>
      </a>
    ),
    ENCONTRAR_AGENCIAS: <center>Encontrar Agencia</center>,
  };
  return (
    <>
      <ExternalContainer>
        <MainIcon color='var(--primary)'>
          <i class={`las la-${icon}`} />
        </MainIcon>
        <Text weight="bolder" color="primary" size="lg">
          {status}
        </Text>
        <TitleContainer>
          <Text weight="bolder" size="xl">
            {title}
          </Text>
        </TitleContainer>
        <DescriptionContainer>
          <Text size="md">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Text>
        </DescriptionContainer>
        {Action[actionType]}
      </ExternalContainer>
    </>
  );
};
