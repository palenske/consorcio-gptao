import { useState } from "react";

const OptionsList = ({ list, setSelectedItem }) => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: "960px",
      width: "90%",
      paddingTop: "50px",
      paddingBottom: "50px",
    }}
  >
    {Object.keys(list).length} resultados encontrados
    {Object.keys(list).map(listProperty => {
      const { name, Description } = list?.[listProperty];
      return (
        <div
          style={{
            border: "solid #707070 1px",
            margin: "20px 0",
            padding: "20px",
            boxShadow: "0px 6px 9px #00000029",
            cursor: "pointer",
          }}
          onClick={() => setSelectedItem(listProperty)}
          key={name}
        >
          <h3 style={{ color: "#4C4D4F", fontWeight: "bold" }}>{name}</h3>
          {/* <img src="/static/img/logo1.png" width="100px" /> */}
          <Description />
          <div style={{ textAlign: "right" }}>
            <button
              style={{
                border: "none",
                backgroundColor: "gray",
                background: "#4A4E4F",
                color: "white",
                borderRadius: "6px",
                width: "100%",
                maxWidth: "304px",
                padding: "6px",
              }}
            >
              Adquirir serviço
            </button>
          </div>
        </div>
      );
    })}
  </div>
);

const SingleOptions = ({ name, component }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#EEEEEE", widht: "100%", padding: "20px" }}
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: "780px",
            width: "90%",
            paddingTop: "30px",
          }}
        >
          <h2>{name}</h2>
        </div>
      </div>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "960px",
          width: "90%",
          paddingTop: "30px",
          paddingBottom: "60px",
        }}
      >
        <div>{component}</div>
      </div>
    </>
  );
};

const CompanyListSelection = ({ list }) => {
  const [selectedItem, setSelectedItem] = useState();

  return list?.[selectedItem]?.component ? (
    <SingleOptions {...list?.[selectedItem]} />
  ) : (
    <OptionsList list={list} setSelectedItem={setSelectedItem} />
  );
};

export default CompanyListSelection;
