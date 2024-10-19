import { Col, Divider, Row } from "antd";
import { Text }  from "@labsmaisdigital/dsmaisevo";
import { Icon } from "@iconify/react";
import { ExternalContainer, Spacer } from "./IconsPortifolio.style";
import { useMediaQuery } from "react-responsive";

export const IconsPortifolio = ({
  items,
  Title,
  SubTitle,
  color,
  dividerType,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 999 });
  const defaultText = !color ? "#4C4D4F" : "white";
  const textColor = color == "primary" ? defaultText : "var(--primary)";
  const backgroundColor =
    color == "primary" ? "var(--primary)" : "var(--contrast)";
  const iconSize = isMobile ? 35 : 60;

  return (
    <ExternalContainer color={backgroundColor}>
      <Text size="xxl" lineHeight="xxl" color={textColor}>
        {Title}
      </Text>
      <Divider
        style={{
          display: dividerType == 'hidden' && "none",
          width: dividerType == 'half' || color !== "primary"? '40%' : '',
          margin: "10px 0",
          background: textColor,
          minWidth: "40%",
        }}
      />
      <Text size="sm" lineHeight="sm" color="#4C4D4F">
        {SubTitle}
      </Text>
      <Spacer size={64} />
      <Row
        gutter={[12, 48]}
        justify="center"
        style={{ margin: "auto", textAlign: "center", alignItems: 'baseline' }}
      >
        {items &&
          items.map(({ iconPath, TextTitle, TextSubTitle }) => (
            <Col key={"TextTitle"} xs={12} lg={items.length < 5 ? 6 : 8}>
              <Icon icon={iconPath} fontSize={iconSize} color={textColor} />
              {TextTitle && (
                <>
                  <Spacer size={24} />
                  <Text
                    size="md"
                    weight="bold"
                    lineHeight="lg"
                    color={textColor}
                  >
                    {TextTitle}
                  </Text>
                </>
              )}
              {TextSubTitle && (
                <>
                  <Spacer size={12} />
                  <Text size="sm" lineHeight="md" color={defaultText}>
                    {TextSubTitle}
                  </Text>
                </>
              )}
            </Col>
          ))}
      </Row>
      <Spacer size={36} />
    </ExternalContainer>
  );
};

export default IconsPortifolio;
