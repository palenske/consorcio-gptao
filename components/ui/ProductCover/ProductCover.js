import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 530px;
`;

const ProductCover = ({ children, cardChildren, cardProps }) => {
  return (
    <div>
      <Row align="middle" gutter={[0, 10]}>
        <Col sm={24} md={13} lg={13}>
          {children}
        </Col>
        <Col sm={24} md={11} lg={11}>
          <CardWrapper>{cardChildren()}</CardWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCover;
