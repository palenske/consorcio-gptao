// import TagManager from "react-gtm-module";

// const tagManagerArgs = {
//   id: "GTM-" + (process.env.NEXT_PUBLIC_GA_ID ?? "no-tag"),
// };

// export const init = () => {
//   TagManager.initialize(tagManagerArgs);
// };

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
//
// export const pageview = (url) => {
//   if (isProductionEnv()) {
//     window.gtag("config", GA_TRACKING_ID, {
//       page_path: url,
//     });
//   }
// };

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
//
// export const event = ({ action, category, label, value }) => {
//   if (isProductionEnv()) {
//     window.gtag("event", action, {
//       event_category: category,
//       event_label: label,
//       value: value,
//     });
//   }
// };
