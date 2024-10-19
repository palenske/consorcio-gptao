import { btoa as encode } from "abab";

export async function getServerSideProps(ctx) {
  return {
    props: { ...(await getStylesByCtx(ctx)) },
  };
}

const getCurrentEnv = () => {
  const fullAddress = window.location.href;
  // const fullAddress =
  //   "https://cobanmaisdigital-whitelabel-git-feature-ver-c9a524-igorcaldeira.vercel.app/credito/automatico";

  if (process && process?.env?.NODE_ENV === "development") {
    return "dev";
  }

  if (typeof window !== "undefined") {
    const isHmlEnv = fullAddress.indexOf("hml.cobanmaisdigital.com.br") !== -1;
    const isHmlCloudEnv = fullAddress.indexOf("cobanmaisdigital.cloud") !== -1;
    if (isHmlEnv || isHmlCloudEnv) {
      return "hml";
    }

    const isVercelEnv = fullAddress.indexOf("igorcaldeira.vercel.app") !== -1;
    if (isVercelEnv) {
      return "vercel";
    }
  }

  return "prod";
};

export const redirectToLogin = ({
  profile,
  productName,
  scope,
  action = "login",
}) => {
  const client = process?.env?.NEXT_PUBLIC_CLIENT_ID;
  const redirectUri = process?.env?.NEXT_PUBLIC_REDIRECT_URI;
  const redirect = `${redirectUri}/api/${
    productName === "capitalgiro" ? "redirect-credito-pj" : "redirect"
  }`;
  const currentEnv = getCurrentEnv();

  const state = encode(
    JSON.stringify({
      env: currentEnv,
      originHost: window.location.host,
      productName,
      partnerName: localStorage.getItem("partner"),
      action,
    })
  );
  const fullLink = `${
    process?.env?.NEXT_PUBLIC_UI_LOGIN
  }?response_type=code&redirect_uri=${redirect}&client_id=${client}&scope=${scope.join(
    "%20"
  )}&state=${state}${profile ? "&profiles=" + profile : ""}`;

  window.location.href = fullLink;
};
