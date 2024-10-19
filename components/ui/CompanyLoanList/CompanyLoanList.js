import CompanyListSelection from "~ui/CompanyListSelection";
import BizCreditoForm from "~forms/BizCreditoForm";
import MultiplikeForm from "~forms/MultiplikeForm";

export default function CompanyLoanList() {
  return (
    <CompanyListSelection
      list={{
        biz: {
          name: "Biz Crédito",
          logo: "biz-credito",
          Description: () => {
            const labelStyle = {
              fontWeight: "lighter",
              fontSize: "14px",
              margin: 0,
              fontFamily: "Montserrat",
            };
            const highlightStyle = {
              fontWeight: "bolder",
              fontSize: "40px",
              color: "#1DB7A4",
              margin: 0,
              fontFamily: "Montserrat",
            };

            return (
              <div className="row">
                <div className="col-4" style={{ textAlign: "center" }}>
                  <p style={labelStyle}>juros a partir de</p>
                  <p style={highlightStyle}>1,99%</p>
                  <p style={labelStyle}>ao mês</p>
                </div>
                <div className="col-4" style={{ textAlign: "center" }}>
                  <p style={labelStyle}>parcele em até</p>
                  <p style={highlightStyle}>24x</p>
                </div>
                <div className="col-4" style={{ textAlign: "center" }}>
                  <p style={labelStyle}>empréstimos de até</p>
                  <p style={highlightStyle}>400 mil</p>
                </div>
              </div>
            );
          },
          component: <BizCreditoForm product="creditoEmpresarial" />,
        },
        multiplike: {
          name: "Multiplike",
          logo: "multiplike",
          Description: () => (
            <div className="row">
              <div className="col-12">
                <ul className="green-list">
                  <li>Dinheiro na conta no mesmo dia;</li>
                  <li>Deságio altamente atrativo;</li>
                  <li>Reembolso flexível;</li>
                  <li>Maiores limites de crédito do mercado;</li>
                  <li>Sem taxa de abertura de cadastro;</li>
                  <li>
                    Não compromete seu limite junto ao Banco Central (BACEN);
                  </li>
                </ul>
              </div>
            </div>
          ),
          component: (
            <MultiplikeForm product="creditoEmpresarial" subProducts={[]} />
          ),
        },
        //   nexoos: {
        //     name: "Nexoos",
        //     logo: "nexoos",
        //     Description: () => (
        //       <div className="row">
        //         <div className="col-12">
        //           <ul className="green-list">
        //             <li> Online, rápido e seguro</li>
        //             <li> Não pedimos seu carro ou imóvel como garantia</li>
        //             <li> De R$ 15 mil até R$ 500 mil</li>
        //             <li> Até 24 meses para pagar</li>
        //             <li> Encontre as melhores taxas de juros do mercado</li>
        //           </ul>
        //         </div>
        //       </div>
        //     ),
        //     component: (
        //       <NexoosForm product="creditoEmpresarial" />
        //     ),
        //   },
      }}
    />
  );
}
