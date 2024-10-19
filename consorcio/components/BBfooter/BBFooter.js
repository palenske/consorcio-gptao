import { Image } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";

const BBFooter = () => (
  <div
    style={{
      backgroundColor: "#FCFC30",
      textAlign: "center",
      paddingTop: "10px",
    }}
  >
    <div style={{ margin: "auto", maxWidth: "350px" }}>
      <Text size="rg" weight="bold" color="primary">
        Representante autorizado
      </Text>
      <Image
        preview={false}
        alt="logo BB consorcios"
        src={"/static/img/consorcio/logos/BBC_inline_blue.png"}
        width={"50%"}
      />
    </div>
  </div>
);

export default BBFooter;
