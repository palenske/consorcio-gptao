import { Row, Slider } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { useMediaQuery } from "react-responsive";

export const SliderFilter = ({
  min,
  max,
  valueRange,
  handleFilter,
  filterBase,
}) => {
  const isMobile = useMediaQuery({ maxWidth: "576px" });
  const isLance = filterBase === "lance";
  return (
    <div
      style={{
        width: "80%",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      {isLance ? (
        <Text size={isMobile ? "rg" : "md"}>
          Entre <b>{valueRange[0]}%</b> e <b>{valueRange[1]}%</b> do valor
        </Text>
      ) : (
        <Text size={isMobile ? "rg" : "md"}>
          Valores entre:
          <br />
          <b>
            {valueRange[0].toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </b>{" "}
          e{" "}
          <b>
            {valueRange[1].toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </b>
        </Text>
      )}
      <div style={{ marginTop: "2rem" }}>
        <Slider
          trackStyle={{ background: "var(--primary)" }}
          handleStyle={{
            display: min + max <= 0 && "none",
            background: "#FCFC30",
            border: "none",
            boxShadow: "none",
          }}
          tooltip={{
            open: false,
          }}
          defaultValue={[min, max]}
          range
          value={valueRange}
          onChange={value => handleFilter(value)}
          min={min}
          max={max}
          disabled={min + max <= 0}
        />
      </div>
      <Row justify="space-between">
        <Text size="sm" color={"grey"}>
          {isLance
            ? `${min}%`
            : min.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </Text>
        <Text size="sm" color={"grey"}>
          {isLance
            ? `${max}%`
            : max.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </Text>
      </Row>
    </div>
  );
};
