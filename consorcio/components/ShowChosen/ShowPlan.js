import { useMediaQuery } from "react-responsive";
import { PlanTable } from "../../Consorcio.style";
import {
  MobileCardsRowWrapper,
  MobileCardsRow,
  MobileCardsTitleCol,
  MobileCardsTitleValue,
  SelectionButton,
  NextIcon,
} from "../../ConsorcioMultistep/steps/Simulation/ConsortiumSimulationSteps/StepThree/components/ListOptions.style";
import { headerColumns, serializeDataColumns } from "../TableData";

const ShowPlan = ({ goodChosen, saveAndNext }) => {
  const smallScreen = useMediaQuery({ maxWidth: "500px" });
  const dataSource = serializeDataColumns(
    [goodChosen],
    "numeroGrupo",
    smallScreen,
    true
  );

  const largeVisualization = (
    <PlanTable
      pagination={false}
      onRow={() => ({
        onClick: () => saveAndNext(goodChosen),
      })}
      bordered
      columns={headerColumns(true).filter(
        ({ dataIndex }) =>
          dataIndex !== "numeroGrupo" && dataIndex !== "actions"
      )}
      dataSource={dataSource}
    />
  );
  const smallVisualization = dataSource.map(info => (
    <MobileCardsRowWrapper key={info}>
      <MobileCardsRow>
        <MobileCardsTitleCol>{"PARCELAS".toUpperCase()}</MobileCardsTitleCol>
        <MobileCardsTitleValue>{info?.parcelas}</MobileCardsTitleValue>
      </MobileCardsRow>
      <MobileCardsRow>
        <MobileCardsTitleCol>{"LANCES".toUpperCase()}</MobileCardsTitleCol>
        <MobileCardsTitleValue>{info?.menorLance}</MobileCardsTitleValue>
      </MobileCardsRow>
      <MobileCardsRow>
        <MobileCardsTitleCol>{"VAGAS".toUpperCase()}</MobileCardsTitleCol>
        <MobileCardsTitleValue>{info?.vagas}</MobileCardsTitleValue>
      </MobileCardsRow>
      <div style={{ width: "100%" }}>
        <SelectionButton
          onClick={() => {
            saveAndNext(goodChosen);
          }}
        >
          SELECIONAR
          <NextIcon />
        </SelectionButton>
      </div>
    </MobileCardsRowWrapper>
  ));

  return smallScreen ? smallVisualization : largeVisualization;
};

export default ShowPlan;
