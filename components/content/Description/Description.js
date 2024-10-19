const Description = () => {
  return (
    <section id="description">
      <div className="container">
        <div className="row" style={{ margin: "50px 0 50px 0" }}>
          <div className="col-12 col-lg-7 text-wrapper">
            <h3>
              <span className="underline underline-white underline-bold">
                NOSSOS SERVIÇOS
              </span>
            </h3>
          </div>
          <div className="col-12 col-lg-6">
            <div style={{ position: "relative", height: "100%" }}>
              <p className="desc-info">
                <span
                  style={{
                    top: -100,
                    position: "absolute",
                    display: "block",
                    width: "20px",
                    height: "10px",
                    backgroundColor: "transparent",
                    content: " ",
                  }}
                  id="para"
                />

                <h4 style={{ marginTop: "50px" }}>SERVIÇOS</h4>
                <ul>
                  <li>Cartão de Crédito</li>
                  <li>Abertura de Contas</li>
                  <li>Financiamento de Imóveis</li>
                  <li>Financiamento de Veículos</li>
                  <li>Seguros</li>
                  <li>Recargas</li>
                  <li>Crédito Consignado</li>
                  <li>Crédito Salário</li>
                  <li>Crédito Benefício</li>
                  <li>Crédito Automático</li>
                  <li>Crédito Renovação</li>
                  <li>Portabilidade</li>
                  <li>Consórcio</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div style={{ position: "relative", height: "100%" }}>
              <p className="desc-info">
                <span
                  style={{
                    top: -100,
                    position: "absolute",
                    display: "block",
                    width: "20px",
                    height: "10px",
                    backgroundColor: "transparent",
                    content: " ",
                  }}
                  id="para"
                />

                <div style={{ position: "relative" }}>
                  <h4>PARA</h4>
                  <ul>
                    <li>Aposentados</li>
                    <li>Pensionista</li>
                    <li>Servidor Municipal</li>
                    <li>Servidor Estadual</li>
                    <li>Servidor Federal</li>
                    <li>Cliente BB</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
