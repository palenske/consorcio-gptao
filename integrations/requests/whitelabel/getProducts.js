const allProducts = [
  {
    lineAwesomeName: "hand-holding-usd",
    link: "/credito-direto",
    label: "Empréstimo Pessoal",
    route: "/static/img/icons/maisbbdigital/emprestimo.png",
    bblink:
      "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/emprestimo",
    enabled: true,
    hideForAllPartners: false,
    description: [
      "• Crédito automático;",
      "• Crédito salário;",
      "• Antecipação do 13º salário;",
      "• Crédito consignado (Federal e INSS).",
    ],
  },
  {
    lineAwesomeName: "users",
    link: "/consorcio",
    label: "Consórcios",
    route: "/static/img/icons/maisbbdigital/agro.png",
    bblink: "",
    enabled: true,
    hideForAllPartners: false,
    description: [
      "• Consórcio Automóvel;",
      "• Consórcio Imobiliário;",
      "• Consórcio Agro;",
      "• Consórcio Gamer.",
    ],
  },
  {
    lineAwesomeName: "comments-dollar",
    link: "/consignado",
    label: "Empréstimo Consignado",
    enabled: true,
    hideForAllPartners: false,
    description: [
      "Confira se a sua empresa tem convênio com o Banco do Brasil e faça uma simulação on-line com a gente.",
    ],
  },
  {
    link: "/seguros",
    label: "Seguros",
    lineAwesomeName: "user-shield",
    bblink:
      "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/seguros",
    enabled: true,
    hideForAllPartners: false,
    description: [
      "• Seguro Auto;",
      "• Seguro Celular;",
      "• Seguro Viagem;",
      "• Seguro Residencial;",
      // "• Seguro Pet.",
    ],
  },
  {
    lineAwesomeName: "tooth",
    link: "/dental",
    label: "Planos Dentais",
    route: "/static/img/icons/maisbbdigital/odontologico.png",
    bblink:
      "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/bb-dental",
    enabled: true,
    hideForAllPartners: false,
    description: [
      "• Dental Essência;",
      "• Dental Prótese;",
      "• Dental Orto;",
      "• Dental Júnior;",
      "• Dental Estética;",
      "• Dental de leite.",
    ],
  },
  {
    lineAwesomeName: "file-invoice-dollar",
    link: "/doadin/inicio",
    label: "Doadin",
    // label: "Ajude ao próximo concorrendo prêmios",
    enabled: true,
    hideForAllPartners: false,
    description: [
      "Quando você faz o seu Doadin, faz uma doação para ajudar os pacientes da AACD e ainda concorre a prêmios em dinheiro de até R$ 25 mil.",
    ],
  },
  // {
  //   lineAwesomeName: "address-card",
  //   link: "/nova-conta",
  //   label: "Nova conta",
  //   enabled: true,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "credit-card",
  //   link: "/cartao-credito",
  //   label: "Cartão de crédito",
  //   route: "/static/img/icons/maisbbdigital/contas.png",
  //   bblink: "",
  //   enabled: true,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "clipboard-check",
  //   link: "/capfiador",
  //   label: "Garantias de Aluguel",
  //   enabled: true,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "home",
  //   link: "/credito-imobiliario",
  //   label: "Crédito Imobiliário",
  //   route: "/static/img/icons/maisbbdigital/investimento.png",
  //   bblink:
  //     "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/investimento",
  //   enabled: true,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "tractor",
  //   link: "/credito-rural",
  //   label: "Crédito Rural",
  //   route: "/static/img/icons/maisbbdigital/agro.png",
  //   bblink:
  //     "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/agro",
  //   enabled: true,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "piggy-bank",
  //   link: "",
  //   label: "Previdência",
  //   route: "/static/img/icons/maisbbdigital/previdencia.png",
  //   bblink:
  //     "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/previdencia",
  //   enabled: false,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "gift",
  //   link: "",
  //   label: "Gift Cards",
  //   route: "/static/img/icons/maisbbdigital/cartao-credito.png",
  //   bblink:
  //     "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/cartoes",
  //   enabled: false,
  //   hideForAllPartners: false,
  // },
  // {
  //   lineAwesomeName: "shopping-bag",
  //   link: "",
  //   label: "Loja Mais Digital",
  //   route: "/static/img/icons/maisbbdigital/abertura.png",
  //   bblink:
  //     "https://www.bb.com.br/pbb/pagina-inicial/voce/produtos-e-servicos/contas",
  //   enabled: false,
  //   hideForAllPartners: false,
  // },
];

const getProducts = () => {
  return allProducts;
};

export default getProducts;
