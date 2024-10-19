import SadMessageScreen from "../../components/SadMessageScreen";
import { Text } from "@labsmaisdigital/dsmaisevo";

const NoCreditScreen = ({ backStep }) => {
  return (
    <SadMessageScreen
      title={
        <Text color="primary" weight="bold" size="xl">
          Nenhuma linha de consórcio disponível
        </Text>
      }
      message={
        <Text size="md">
          Infelizmente não encontramos nenhuma linha
          <br />
          de consórcio disponível para você.
        </Text>
      }
      backStep={backStep}
    />
  );
};

export default NoCreditScreen;
