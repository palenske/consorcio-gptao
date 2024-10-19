import { Col, Divider, Image, Row } from "antd";
import { Text }  from "@labsmaisdigital/dsmaisevo";
import { useMediaQuery } from "react-responsive";

export const TextAndImage = ({
  imageUrl,
  imageSize,
  textTitle,
  textBlock,
  textBlockSize,
  reverse,
  bgColor,
  dividerColor,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 999 });
  const defaultText = !bgColor ? "#4C4D4F" : "white";
  const textColor = bgColor == "primary" ? defaultText : "var(--primary)";
  const backgroundColor = bgColor == "primary" ? "var(--primary)" : "#F1EFEF";

  return (
    <>
      <Row
        justify="center"
        wrap={false}
        style={{
          backgroundColor,
          color: textColor,
          margin: "auto",
          flexDirection: reverse && "row-reverse",
        }}
      >
        <Col
          xs={isMobile ? 24 : 12}
          xxl={12}
          style={{
            backgroundColor,
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
                background: dividerColor || textColor,
                minWidth: "50%",
                width: isMobile ? "50%" : "90%",
              }}
            />
            <br />
            <div
              style={{
                color: defaultText,
                width: textBlockSize ? `${textBlockSize}` : "",
              }}
            >
              {textBlock}
            </div>
          </div>
        </Col>
        {!isMobile && (
          <Col xs={12} xxl={12}>
            {typeof imageUrl == "string" ? (
              <Image
                height={imageSize ? imageSize[0] : "100%"}
                width={imageSize ? imageSize[1] : "100%"}
                src={imageUrl}
                alt={imageUrl.split("/").pop().split(".", 1)[0] || "image"}
                preview={false}
              />
            ) : (
              <>{imageUrl}</>
            )}
          </Col>
        )}
      </Row>
    </>
  );
};

export default TextAndImage;
