import styled from "styled-components";
import { RightOutlined } from "@ant-design/icons";

const MobileCardsWrapper = styled.div`
  margin-top: 20px;
`;

const MobileCardsRowWrapper = styled.div`
  margin-bottom: 30px;
  div:nth-child(3) {
    border-bottom: 2px solid #e2dcdc;
  }
`;

const MobileCardsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-left: 2px solid #e2dcdc;
  border-right: 2px solid #e2dcdc;
`;

const MobileCardsTitleCol = styled.div`
  padding: 10px;
  border-top: 2px solid #e2dcdc;
  border-right: 1px solid #e2dcdc;

  flex: 1;
  background-color: #f4f4f4;
  color: var(--primary);
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileCardsTitleValue = styled.div`
  padding: 10px;
  background-color: white;
  border-top: 2px solid #e2dcdc;
  border-left: 1px solid #e2dcdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const SelectionButton = styled.div`
  position: relative;
  padding: 10px 20px;
  flex: 1;
  background: var(--primary);
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  border-left: 2px solid #e2dcdc;
  border-right: 2px solid #e2dcdc;
  border-bottom: 2px solid #e2dcdc;
`;

const NextIcon = styled(RightOutlined)`
  position: absolute;
  color: #fcfc30;
  stroke-width: 60;
  stroke: #fcfc30;
  font-size: 20px;
  top: 15px;
  right: 12px;
`;

export {
  MobileCardsWrapper,
  MobileCardsRow,
  MobileCardsRowWrapper,
  MobileCardsTitleCol,
  MobileCardsTitleValue,
  SelectionButton,
  NextIcon,
};
