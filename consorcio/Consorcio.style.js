import { Card, Collapse, Switch, Table, Tabs } from "antd";
import { Button } from "@labsmaisdigital/dsmaisevo";
import styled from "styled-components";

const StyledButton = styled(Button)`
  i {
    color: ${({ iconColor }) => iconColor ?? "white"};
  }
`;

const ExternalWrapper = styled.div``;

const StyledInnerContainer = styled.div`
  width: 90%;
  padding: 5rem 3rem 6rem;
  margin: auto;

  @media screen and (max-width: 574px) {
    padding: 4rem 1.5rem;
  }
`;

const CardBB = styled(Card)`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2px;
  .ant-card-head-title {
    padding: 1%;
  }
`;

const StyledHeroSection = styled.div`
  transform: scale(0.89);
  margin: 3rem auto auto;
  background-color: var(--constrast);
  color: var(--primary);

  @media screen and (max-width: 574px) {
    transform: scale(0.95);
    margin: 5rem auto auto;
  }
`;

const StyledCategorySection = styled.div`
  background-color: var(--primary);
  color: var(--constrast);
`;

const StyledGraySection = styled.div`
  background-color: #f7f7f7;
  color: var(--primary);
`;

const StyledWhiteSection = styled.div`
  background-color: white;
  color: var(--primary);
`;

const ExternalStepContainer = styled.div`
  margin: 0 auto 80px;
  max-width: 1366px;
  width: 100%;

  span.anticon {
    display: flex;
  }
`;

const HeroStepTitle = styled.h2`
  text-align: center;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const FilterTabs = styled(Tabs)`
  .ant-tabs-nav:before {
    border-bottom: 2px solid #e2dcdc;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--primary);
  }

  .ant-tabs-tab:hover {
    color: var(--primary);
  }

  .ant-tabs-tab:focus {
    color: var(--primary);
  }

  .ant-tabs-ink-bar {
    background: var(--primary);
  }
`;

const PlanTable = styled(Table)`
  .ant-table.ant-table-bordered
    > .ant-table-container
    > .ant-table-content
    > table {
    border-top: 0;
  }

  th.ant-table-cell {
    padding-left: 10px;
    padding-right: 10px;
    background: #f4f4f4;
    color: var(--primary);
  }

  th {
    border-top: 2px solid #e2dcdc !important;
    border-left: 2px solid #e2dcdc !important;
    border-bottom: 2px solid #e2dcdc !important;
  }

  th:last-child {
    border-right: 2px solid #e2dcdc !important;
  }

  td {
    border-left: 2px solid #e2dcdc !important;
    border-bottom: 2px solid #e2dcdc !important;
  }

  td:last-child {
    border-right: 2px solid #e2dcdc !important;
  }

  tr.ant-table-placeholder > td.ant-table-cell {
    border-right: 2px solid #e2dcdc !important;
  }

  td.ant-table-cell {
    padding: 10px 0;
  }

  tr > td:nth-child(4) {
    background: linear-gradient(
      90deg,
      white 50%,
      var(--primary) 50%
    ) !important;
  }

  div.ant-table-container {
    border-left: 0 !important;
  }
`;

const GoodsCard = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  border-radius: 5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  box-shadow: whitesmoke 0px -10px 10px 0px;
  z-index: 1;
`;

const CollapseInfo = styled(Collapse)`
  border-top: ${({ borderTop }) => borderTop && "1px solid #d9d9d9"};
  border-bottom: ${({ borderBottom }) => borderBottom && "1px solid #d9d9d9"};

  @media screen and (max-width: 574px) {
    .ant-collapse-header {
      padding: 12px 0 !important;
    }
  }
`;

const PanelInfo = styled(Collapse.Panel)`
  .ant-collapse-content-box {
    padding: 0px;
  }
`;

const Spacer = styled.div`
  height: ${({ size }) =>
    size ? `${{ sm: "2rem", md: "4rem", lg: "6rem" }[size]}` : "2rem"};
`;

const CardForm = styled(Card)`
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.08);
  .ant-card-body {
    padding: 2.5rem 3rem;

    @media screen and (max-width: 767px) {
      padding: 2.5rem 0.5rem;
    }
  }
`;

const SuspenseLoader = styled.div`
  display: block;
  height: 900px;
`;

const CollapseItem = styled.div`
  border-top: ${({ borderTop }) => borderTop && "1px solid #d9d9d9"};
  border-bottom: ${({ borderBottom }) => borderBottom && "1px solid #d9d9d9"};
  display: flex;
  flex-wrap: wrap;
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  transition: all 0.3s, visibility 0s;
  justify-content: space-between;
`;

const CustomSwitch = styled(Switch)`
  &.ant-switch-checked {
    background: ${({ bgColor }) => bgColor && bgColor};
  }
`;

const MultiStepContainer = styled.div`
  margin: 0 auto;
  padding-top: 6rem;
  width: 100%;
  background-image: url(/static/img/bb-digital-bg.webp);
  background-repeat: no-repeat;
  background-position: 50%;
  transition: smooth;
  transition-property: background-position;
  background-attachment: fixed;
  background-size: 48%;
  border-bottom: 1px solid #e7e7e7;

  @media screen and (max-width: 574px) {
    background-position: 50%;
    background-size: 70%;
  }
`;

export {
  StyledButton,
  CardForm,
  PanelInfo,
  CardBB,
  CollapseInfo,
  CollapseItem,
  CustomSwitch,
  ExternalStepContainer,
  ExternalWrapper,
  FilterTabs,
  GoodsCard,
  HeroStepTitle,
  PlanTable,
  Spacer,
  StyledCategorySection,
  StyledGraySection,
  StyledHeroSection,
  StyledInnerContainer,
  StyledWhiteSection,
  SuspenseLoader,
  MultiStepContainer,
};
