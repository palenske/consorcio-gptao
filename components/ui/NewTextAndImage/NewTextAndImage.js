import { useMediaQuery } from "react-responsive";
import { Row, Col, Divider, Image } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";

export const NewTextAndImage = ({
  imageUrl,
  imageSize,
  textTitle,
  textBlock,
  textBlockSize,
  reverse,
  bgColor,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 999 });
  const defaultText = !bgColor ? "#4C4D4F" : "white";
  const textColor = bgColor == "primary" ? defaultText : "var(--primary)";
  const backgroundColor = bgColor;

  return (
    <>
      <Row
        justify="center"
        wrap={false}
        style={{
          backgroundColor: !reverse ? backgroundColor : "#F0F0F0",
          color: textColor,
          margin: "auto",
          flexDirection: reverse && "row-reverse",
        }}
      >
        <Col
          xs={isMobile ? 24 : 12}
          xxl={12}
          style={{
            backgroundColor: !reverse ? "#F0F0F0" : backgroundColor,
            color: "black",
            borderRadius: reverse ? "30px 0 0 30px" : "0 30px 30px 0",
            transform: isMobile ? "" : `translateX(${reverse ? "-" : "+"}50px)`,
            zIndex: "1",
          }}
        >
          <div
            style={
              !isMobile
                ? {
                    transform: `translateX(${reverse ? "+" : "-"}50px)`,
                    padding: reverse ? "3rem 0 0 2rem" : "3rem 0 0 20%",
                    width: textBlockSize ? `${textBlockSize}px` : "",
                  }
                : {
                    padding: "1.5rem 2rem",
                  }
            }
          >
            <Text size="xxl" lineHeight="xxl" color={textColor}>
              {textTitle}
            </Text>
            <Divider
              style={{
                margin: "10px 0",
                background: textColor,
                minWidth: "50%",
                width: isMobile ? "50%" : "90%",
              }}
            />
            <br />
            <div style={{ color: defaultText }}>{textBlock}</div>
          </div>
        </Col>
        {!isMobile && (
          <Col xs={12} xxl={12}>
            <div
              style={{
                background: `no-repeat 8rem/45% url('/static/img/bg_white_logo.png')`,
              }}
            >
              <Image
                height={imageSize && imageSize[0]}
                width={imageSize && imageSize[1]}
                src={imageUrl}
                alt={imageUrl.split("/").pop().split(".", 1)[0] || "image"}
                preview={false}
              />
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default NewTextAndImage;
