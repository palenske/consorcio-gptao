import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const localStorageList = ["name", "mail", "wa", "doc", "seller", "externalId"];

const getInLocalStorage = (k, v) => {
  if (k && v) {
    return localStorage.getItem(k, v);
  }
};

const useLocalStorageConfigs = () => {
  const router = useRouter();
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (process.browser && router.isReady) {
      const options = {};

      localStorageList.map(key => {
        if (router?.query?.[key]) {
          const value = getInLocalStorage(key, router?.query?.[key]);
          options[key] = value;
        }
      });

      setInfo({
        leadInfo: {
          name: options?.name,
          mail: options?.mail,
          wa: options?.wa,
          doc: options?.doc,
        },
        attemptInfo: {
          seller: options?.seller,
          externalId: options?.externalId,
        },
      });
    }
  }, [router.isReady]);

  return { isReady: router.isReady, info };
};

export default useLocalStorageConfigs;
