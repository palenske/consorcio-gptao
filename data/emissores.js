const emissores = [
  {
    value: "ABNC",
    label: "ABNC",
  },
  {
    value: "AGU",
    label: "AGU",
  },
  {
    value: "ANAC",
    label: "ANAC",
  },
  {
    value: "CAER",
    label: "CAER",
  },
  {
    value: "CAU",
    label: "CAU",
  },
  {
    value: "CBM",
    label: "CBM",
  },
  {
    value: "CFA",
    label: "CFA",
  },
  {
    value: "CFB",
    label: "CFB",
  },
  {
    value: "CFBIO",
    label: "CFBIO",
  },
  {
    value: "CFBM",
    label: "CFBM",
  },
  {
    value: "CFC",
    label: "CFC",
  },
  {
    value: "CFESS",
    label: "CFESS",
  },
  {
    value: "CFF",
    label: "CFF",
  },
  {
    value: "CFFA",
    label: "CFFA",
  },
  {
    value: "CFM",
    label: "CFM",
  },
  {
    value: "CFMV",
    label: "CFMV",
  },
  {
    value: "CFN",
    label: "CFN",
  },
  {
    value: "CFO",
    label: "CFO",
  },
  {
    value: "CFP",
    label: "CFP",
  },
  {
    value: "CFQ",
    label: "CFQ",
  },
  {
    value: "CFT",
    label: "CFT",
  },
  {
    value: "CFTA",
    label: "CFTA",
  },
  {
    value: "CGPI",
    label: "CGPI",
  },
  {
    value: "CGPMAF",
    label: "CGPMAF",
  },
  {
    value: "CIPC",
    label: "CIPC",
  },
  {
    value: "CNIG",
    label: "CNIG",
  },
  {
    value: "CNT",
    label: "CNT",
  },
  {
    value: "CNTV",
    label: "CNTV",
  },
  {
    value: "COFECI",
    label: "COFECI",
  },
  {
    value: "COFECON",
    label: "COFECON",
  },
  {
    value: "COFEM",
    label: "COFEM",
  },
  {
    value: "COFEN",
    label: "COFEN",
  },
  {
    value: "COFFITO",
    label: "COFFITO",
  },
  {
    value: "COMAER",
    label: "COMAER",
  },
  {
    value: "CONFE",
    label: "CONFE",
  },
  {
    value: "CONFEA",
    label: "CONFEA",
  },
  {
    value: "CONFEF",
    label: "CONFEF",
  },
  {
    value: "CONFERE",
    label: "CONFERE",
  },
  {
    value: "CONRE",
    label: "CONRE",
  },
  {
    value: "CONRERP",
    label: "CONRERP",
  },
  {
    value: "CORE",
    label: "CORE",
  },
  {
    value: "CORECON",
    label: "CORECON",
  },
  {
    value: "COREM",
    label: "COREM",
  },
  {
    value: "COREN",
    label: "COREN",
  },
  {
    value: "CRA",
    label: "CRA",
  },
  {
    value: "CRAS",
    label: "CRAS",
  },
  {
    value: "CRB",
    label: "CRB",
  },
  {
    value: "CRBIO",
    label: "CRBIO",
  },
  {
    value: "CRBM",
    label: "CRBM",
  },
  {
    value: "CRC",
    label: "CRC",
  },
  {
    value: "CREA",
    label: "CREA",
  },
  {
    value: "CRECI",
    label: "CRECI",
  },
  {
    value: "CREF",
    label: "CREF",
  },
  {
    value: "CREFITO",
    label: "CREFITO",
  },
  {
    value: "CRESS",
    label: "CRESS",
  },
  {
    value: "CRF",
    label: "CRF",
  },
  {
    value: "CRFA",
    label: "CRFA",
  },
  {
    value: "CRM",
    label: "CRM",
  },
  {
    value: "CRMV",
    label: "CRMV",
  },
  {
    value: "CRN",
    label: "CRN",
  },
  {
    value: "CRO",
    label: "CRO",
  },
  {
    value: "CRP",
    label: "CRP",
  },
  {
    value: "CRPRE",
    label: "CRPRE",
  },
  {
    value: "CRQ",
    label: "CRQ",
  },
  {
    value: "CRT",
    label: "CRT",
  },
  {
    value: "CRTA",
    label: "CRTA",
  },
  {
    value: "CTPS",
    label: "CTPS",
  },
  {
    value: "CV",
    label: "CV",
  },
  {
    value: "DELEMIG",
    label: "DELEMIG",
  },
  {
    value: "DETRAN",
    label: "DETRAN",
  },
  {
    value: "DGPC",
    label: "DGPC",
  },
  {
    value: "DIC",
    label: "DIC",
  },
  {
    value: "DICC",
    label: "DICC",
  },
  {
    value: "DIREX",
    label: "DIREX",
  },
  {
    value: "DPF",
    label: "DPF",
  },
  {
    value: "DPMAF",
    label: "DPMAF",
  },
  {
    value: "DPT",
    label: "DPT",
  },
  {
    value: "DPTC",
    label: "DPTC",
  },
  {
    value: "DREX",
    label: "DREX",
  },
  {
    value: "DRT",
    label: "DRT",
  },
  {
    value: "EB",
    label: "EB",
  },
  {
    value: "FAB",
    label: "FAB",
  },
  {
    value: "FENAJ",
    label: "FENAJ",
  },
  {
    value: "FGTS",
    label: "FGTS",
  },
  {
    value: "FIPE",
    label: "FIPE",
  },
  {
    value: "FLS",
    label: "FLS",
  },
  {
    value: "FUNAI",
    label: "FUNAI",
  },
  {
    value: "GEJSP",
    label: "GEJSP",
  },
  {
    value: "GEJSPC",
    label: "GEJSPC",
  },
  {
    value: "GEJUSPC",
    label: "GEJUSPC",
  },
  {
    value: "GESP",
    label: "GESP",
  },
  {
    value: "GOVGO",
    label: "GOVGO",
  },
  {
    value: "ICLA",
    label: "ICLA",
  },
  {
    value: "ICP",
    label: "ICP",
  },
  {
    value: "IDAMP",
    label: "IDAMP",
  },
  {
    value: "IFP",
    label: "IFP",
  },
  {
    value: "IGP",
    label: "IGP",
  },
  {
    value: "IIACM",
    label: "IIACM",
  },
  {
    value: "IICC",
    label: "IICC",
  },
  {
    value: "IICCECF",
    label: "IICCECF",
  },
  {
    value: "IICM",
    label: "IICM",
  },
  {
    value: "IIGP",
    label: "IIGP",
  },
  {
    value: "IIJDM",
    label: "IIJDM",
  },
  {
    value: "IIPC",
    label: "IIPC",
  },
  {
    value: "IIRGD",
    label: "IIRGD",
  },
  {
    value: "IIRHM",
    label: "IIRHM",
  },
  {
    value: "IITB",
    label: "IITB",
  },
  {
    value: "IML",
    label: "IML",
  },
  {
    value: "INI",
    label: "INI",
  },
  {
    value: "IPF",
    label: "IPF",
  },
  {
    value: "ITCP",
    label: "ITCP",
  },
  {
    value: "ITEP",
    label: "ITEP",
  },
  {
    value: "MAER",
    label: "MAER",
  },
  {
    value: "MB",
    label: "MB",
  },
  {
    value: "MD",
    label: "MD",
  },
  {
    value: "MDS",
    label: "MDS",
  },
  {
    value: "MEC",
    label: "MEC",
  },
  {
    value: "MEX",
    label: "MEX",
  },
  {
    value: "MINDEF",
    label: "MINDEF",
  },
  {
    value: "MJ",
    label: "MJ",
  },
  {
    value: "MM",
    label: "MM",
  },
  {
    value: "MMA",
    label: "MMA",
  },
  {
    value: "MPAS",
    label: "MPAS",
  },
  {
    value: "MPE",
    label: "MPE",
  },
  {
    value: "MPF",
    label: "MPF",
  },
  {
    value: "MPT",
    label: "MPT",
  },
  {
    value: "MRE",
    label: "MRE",
  },
  {
    value: "MT",
    label: "MT",
  },
  {
    value: "MTE",
    label: "MTE",
  },
  {
    value: "MTPS",
    label: "MTPS",
  },
  {
    value: "NUMIG",
    label: "NUMIG",
  },
  {
    value: "OAB",
    label: "OAB",
  },
  {
    value: "OMB",
    label: "OMB",
  },
  {
    value: "PC",
    label: "PC",
  },
  {
    value: "PF",
    label: "PF",
  },
  {
    value: "PGFN",
    label: "PGFN",
  },
  {
    value: "PM",
    label: "PM",
  },
  {
    value: "POLITEC",
    label: "POLITEC",
  },
  {
    value: "PRF",
    label: "PRF",
  },
  {
    value: "PTC",
    label: "PTC",
  },
  {
    value: "SCC",
    label: "SCC",
  },
  {
    value: "SCJDS",
    label: "SCJDS",
  },
  {
    value: "SDS",
    label: "SDS",
  },
  {
    value: "SECC",
    label: "SECC",
  },
  {
    value: "SECCDE",
    label: "SECCDE",
  },
  {
    value: "SEDS",
    label: "SEDS",
  },
  {
    value: "SEGUP",
    label: "SEGUP",
  },
  {
    value: "SEJSP",
    label: "SEJSP",
  },
  {
    value: "SEJUC",
    label: "SEJUC",
  },
  {
    value: "SEJUSP",
    label: "SEJUSP",
  },
  {
    value: "SEPC",
    label: "SEPC",
  },
  {
    value: "SES",
    label: "SES",
  },
  {
    value: "SESC",
    label: "SESC",
  },
  {
    value: "SESDC",
    label: "SESDC",
  },
  {
    value: "SESDEC",
    label: "SESDEC",
  },
  {
    value: "SESEG",
    label: "SESEG",
  },
  {
    value: "SESP",
    label: "SESP",
  },
  {
    value: "SESPAP",
    label: "SESPAP",
  },
  {
    value: "SESPDC",
    label: "SESPDC",
  },
  {
    value: "SESPDS",
    label: "SESPDS",
  },
  {
    value: "SGPC",
    label: "SGPC",
  },
  {
    value: "SGPJ",
    label: "SGPJ",
  },
  {
    value: "SIM",
    label: "SIM",
  },
  {
    value: "SJ",
    label: "SJ",
  },
  {
    value: "SJCDH",
    label: "SJCDH",
  },
  {
    value: "SJDS",
    label: "SJDS",
  },
  {
    value: "SJS",
    label: "SJS",
  },
  {
    value: "SJTC",
    label: "SJTC",
  },
  {
    value: "SJTS",
    label: "SJTS",
  },
  {
    value: "SNJ",
    label: "SNJ",
  },
  {
    value: "SPMAF",
    label: "SPMAF",
  },
  {
    value: "SPTC",
    label: "SPTC",
  },
  {
    value: "SRDPF",
    label: "SRDPF",
  },
  {
    value: "SRF",
    label: "SRF",
  },
  {
    value: "SRTE",
    label: "SRTE",
  },
  {
    value: "SSDC",
    label: "SSDC",
  },
  {
    value: "SSDS",
    label: "SSDS",
  },
  {
    value: "SSI",
    label: "SSI",
  },
  {
    value: "SSP",
    label: "SSP",
  },
  {
    value: "SSPCGP",
    label: "SSPCGP",
  },
  {
    value: "SSPDC",
    label: "SSPDC",
  },
  {
    value: "SSPDS",
    label: "SSPDS",
  },
  {
    value: "SSPPC",
    label: "SSPPC",
  },
  {
    value: "SUSEP",
    label: "SUSEP",
  },
  {
    value: "SUSEPE",
    label: "SUSEPE",
  },
  {
    value: "TJ",
    label: "TJ",
  },
  {
    value: "TJAEM",
    label: "TJAEM",
  },
  {
    value: "TRE",
    label: "TRE",
  },
  {
    value: "TRF",
    label: "TRF",
  },
  {
    value: "TSE",
    label: "TSE",
  },
];

export default emissores;
