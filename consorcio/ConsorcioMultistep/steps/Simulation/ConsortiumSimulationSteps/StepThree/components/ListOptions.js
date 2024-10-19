import { Text } from "@labsmaisdigital/dsmaisevo";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  headerColumns,
  serializeDataColumns,
} from "../../../../../../components/TableData";
import { PlanTable } from "../../../../../../Consorcio.style";
import {
  MobileCardsWrapper,
  MobileCardsRow,
  MobileCardsRowWrapper,
  MobileCardsTitleCol,
  MobileCardsTitleValue,
  SelectionButton,
  NextIcon,
} from "./ListOptions.style";


const ListOptions = ({
  list,
  setShowChosen,
  setGoodChosen,
  filterBase,
  filterConfig,
}) => {
  const smallScreen = useMediaQuery({ maxWidth: "800px" });

  const filterList = item => {
    const {
      menorLanceContemplacao: { percentual },
      grupo: { valorParcela },
    } = item;
    const startRange = filterConfig.valueRange[0];
    const endRange = filterConfig.valueRange[1];

    if (filterBase == "lance") {
      return percentual >= startRange && percentual <= endRange;
    } else {
      return valorParcela >= startRange && valorParcela <= endRange;
    }
  };

  const handleSelection = record => {
    const {
      numeroGrupo: {
        props: {
          children: {
            props: { children: groupCode },
          },
        },
      },
      parcelas: {
        props: { children: childrenArray },
      },
    } = record;
    const {
      props: {
        children: {
          props: { children: installmentValue },
        },
      },
    } = childrenArray[0];
    const selectedItem = list.find(
      ({ grupo: { codigoGrupo, valorParcela } }) =>
        codigoGrupo == groupCode &&
        (installmentValue.match(/\d+/g).join("") / 100).toFixed(2) ==
          valorParcela
    );
    setShowChosen(true);
    setGoodChosen(selectedItem);
    scrollToTop(320);
  };

  const filteredList = (list ?? []).filter(filterList);
  const dataSource = serializeDataColumns(filteredList, "", smallScreen);

  const largeVisualization = (
    <PlanTable
      pagination={{
        hideOnSinglePage: true,
        size: "small",
        style: { gap: "20px" },
      }}
      style={{
        marginTop: "-2px",
        cursor: "pointer",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10))",
      }}
      onRow={(record, _) => ({
        onClick: () => handleSelection(record),
      })}
      bordered
      columns={headerColumns()}
      dataSource={dataSource}
    />
  );

  const smallVisualization = (
    <MobileCardsWrapper>
      {dataSource.length > 0 ? (
        dataSource.map((info, index) => (
          <MobileCardsRowWrapper key={info.parcelas + index}>
            <MobileCardsRow>
              <MobileCardsTitleCol>
                {"PARCELAS".toUpperCase()}
              </MobileCardsTitleCol>
              <MobileCardsTitleValue>{info?.parcelas}</MobileCardsTitleValue>
            </MobileCardsRow>
            <MobileCardsRow>
              <MobileCardsTitleCol>
                {"LANCES".toUpperCase()}
              </MobileCardsTitleCol>
              <MobileCardsTitleValue>{info?.menorLance}</MobileCardsTitleValue>
            </MobileCardsRow>
            <MobileCardsRow>
              <MobileCardsTitleCol>{"VAGAS".toUpperCase()}</MobileCardsTitleCol>
              <MobileCardsTitleValue>{info?.vagas}</MobileCardsTitleValue>
            </MobileCardsRow>
            <div style={{ width: "100%" }}>
              <SelectionButton
                onClick={() => {
                  handleSelection(info);
                }}
              >
                SELECIONAR
                <NextIcon />
              </SelectionButton>
            </div>
          </MobileCardsRowWrapper>
        ))
      ) : (
        <div
          style={{
            paddingTop: "4rem",
            textAlign: "center",
          }}
        >
          <Text size="lg" color="var(--primary)">
            Nenhum item encontrado para esse filtro :(
          </Text>
        </div>
      )}
    </MobileCardsWrapper>
  );

  return smallScreen ? smallVisualization : largeVisualization;
};

export default ListOptions;
