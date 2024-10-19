import { useRouter } from "next/router";
import { useEffect } from "react";

const sessionStorageList = "widget";

const setInLocalStorage = (k, v) => {
  if (k && v) {
    localStorage.setItem(k, v);
  }
};

const usePrepareRouteConfigurations = () => {
  const router = useRouter();
  const { widget } = router.query;
  const isClientSide = typeof window !== "undefined";

  useEffect(() => {
    if (isClientSide && router.isReady) {
      //user info
      setInLocalStorage("u.phone", router?.query?.wa);
      setInLocalStorage("u.mail", router?.query?.mail);
      setInLocalStorage("u.doc", router?.query?.doc);
      setInLocalStorage("u.name", router?.query?.name);
      //settings info
      setInLocalStorage("seller", router?.query?.seller);
      setInLocalStorage("externalId", router?.query?.id_proposal);

      if (!sessionStorage.getItem(sessionStorageList) && widget) {
        sessionStorage.setItem(sessionStorageList, widget);
      }
    }
  }, [router.isReady]);

  let isWidget = isClientSide
    ? sessionStorage.getItem(sessionStorageList)
    : false;

  return { isWidget: isWidget === "true" ? true : false };
};

export default usePrepareRouteConfigurations;
