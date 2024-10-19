const FullImageSection = ({ id, file, isPhone }) => {
  return (
    <div className={" bg-" + id} style={{ position: "relative" }}>
      <div className={"content-blurr"}>
        <img
          loading="lazy"
          src={"/static/img/backgrounds/" + file}
          style={{
            width: "100%",
            maxWidth: isPhone ? "500px" : "700px",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default FullImageSection;
