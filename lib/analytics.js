export const setSuccessParam = (content = "ok") => {
  if (window) {
    const url = new URL(window.location);
    url.searchParams.set("success", content);
    window.history.pushState(null, "", url.toString());
  }
};

export const triggerCustomEvent = (name, info) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: name,
      customPayload: info,
    });
  }
};

export const getRefQueryParam = (name)=> {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export const getAnalyticsData = ()=>{
  return {
    source: getRefQueryParam("utm_source") || document.referrer,
    medium: getRefQueryParam("utm_medium"),
    campaign: getRefQueryParam("utm_campaign"),
    value: getRefQueryParam("utm_content"),
  }
}
