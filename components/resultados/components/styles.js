export const stylesFunc = isMobile => ({
  container: {
    margin: "0 auto",
    width: "90%",
    maxWidth: "1400px",
    padding: isMobile ? "" : "1rem",
    marginTop: "60px",
  },
  card: {
    background: "#FFFFFF",
    boxShadow: "0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
    borderRadius: "2px",
    marginBottom: "90px",
  },
  header: {
    backgroundColor: "#FDFC32",
    textAlign: "center",
    padding: "3px",
  },
  botao: {
    backgroundColor: "var(--primary)",
    border: "2px solid #4D60E2",
    borderRadius: "2px",
    maxWidth: "314px",
    width: "90%",
    height: "46px",
    marginBottom: "2rem",
    padding: "5px 16px",
  },
});
