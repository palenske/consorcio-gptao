import { ArrowLeftOutlined } from "@ant-design/icons";
import { Image } from "antd";

const scrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

const SadMessageScreen = ({ title, message, backStep, inFlow }) => {
  return (
    <div
      style={{
        paddingTop: inFlow ? "2rem" : "12rem",
        minHeight: inFlow ? "" : "42rem",
      }}
    >
      <ArrowLeftOutlined
        style={{
          position: "absolute",
          top: "9rem",
          left: "2rem",
          color: "var(--primary)",
          fontSize: "30px",
        }}
        onClick={() => backStep()}
      />
      {scrollToTop()}
      <center>
        {title}
        <br />
        <Image
          preview={false}
          src="/static/img/consorcio/sadoadin.png"
          alt="sad-face"
          width={80}
        />
        <br />
        <br />
        {message}
      </center>
    </div>
  );
};

export default SadMessageScreen;
