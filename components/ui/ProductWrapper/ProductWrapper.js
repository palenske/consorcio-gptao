import ServiceSteps from "~content/ServiceSteps";

const ProductWrapper = ({ title, subtitle, description, children }) => {
  return (
    <>
      <section className="section-cartao-de-credito clearfix">
        <div className="container">
          <div className="credi-info descServico">
            <div className="col-lg-8 col-md-12">
              <h3 className="titulo-servico-h3">
                <span className="underline default-color">{title}</span>
              </h3>
              <h2 className="titulo-servico-h2">{subtitle}</h2>
            </div>
            <div className="col-lg-8 col-md-12">
              <p
                className="text-justify text-white"
                style={{ fontSize: "14px" }}
              >
                {description}
              </p>
            </div>
            {children}
          </div>
        </div>
      </section>
      <ServiceSteps />
    </>
  );
};

export default ProductWrapper;
