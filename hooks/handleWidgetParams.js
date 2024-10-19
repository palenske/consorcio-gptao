import { useEffect, useState } from "react";


var propList = ["token", "widget", "colorPrimary", "colorSec"];

export const HandleWidgetParams = (query, widgetOptions) => {
  const [isValid, setValid] = useState(null);
  const [params, setParams] = useState({});

  /* alert("rescebeu query ", JSON.stringify(query)); */

  useEffect(() => {
    const settings = {};
    let hasAllValues = true;

    propList.forEach(key => {
      const queryValue = query?.[key];
      if (queryValue) {
        settings[key] = queryValue;
      } else {
        /* alert(key); */
        hasAllValues = false;
      }
    });

    const validOption = widgetOptions.indexOf(settings?.widget) !== -1;

    if (!validOption) {
      /* alert("invalid option"); */
    }

    if (!hasAllValues || !validOption) {
      setValid(false);
    } else {
      setParams(settings);
      sessionStorage.setItem("wsettings", btoa(JSON.stringify(settings)));
      setValid(true);
    }
  }, []);

  return { isValid, params };
};

export default HandleWidgetParams;
