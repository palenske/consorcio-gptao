const About = () => {
  return (
    <div
      id="about-section"
      className={"bg-homem"}
      style={{ position: "relative" }}
    >
      <div className={"content-blurr"}>
        <div className="container">
          <div className="row" style={{ margin: "50px 0 50px 0" }}>
            <div className="col-12 col-lg-6 text-wrapper">
              <div
                style={{
                  backgroundColor: "white",
                  padding: "50px 60px 50px 60px",
                }}
              >
                <h3>
                  <span className="underline underline-bold">
                    Coban Mais Digital
                  </span>
                </h3>
                <div style={{ height: "100%" }}>
                  <p>Seu Correspondente Bancário Digital do Banco do Brasil</p>

                  <p>
                    Na era da digitalização o Coban Mais Digital simplifica sua
                    vida financeira, com um amplo Hub de produtos financeiros,
                    proporcionando uma variedade de Créditos e condições de
                    pagamentos.
                  </p>

                  <p>
                    Com múltiplos canais de pesquisas, produtos e opções em
                    pagamentos o Coban Mais Digital permite que você faça tudo
                    online e sem sair de casa.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1"></div>
            <div className="col-12 col-lg-5">
              <img
                loading="lazy"
                src={"/static/img/backgrounds/homem.webp"}
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  margin: "0 auto",
                  marginTop: "10%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
