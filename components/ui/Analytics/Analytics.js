import Script from "next/script";

const isProductionEnv = () => {
  if (typeof window !== "undefined") {
    const hostname = window?.location?.hostname;
    const maindomain = "cobanmaisdigital.com.br";
    return hostname === maindomain || hostname === "www." + maindomain;
  }

  return false;
};

const Analytics = () => {
  if (!isProductionEnv()) {
    return null;
  }

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://cdn.lr-in-prod.com/LogRocket.min.js`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.LogRocket && window.LogRocket.init('eekd4y/mais-digital'); `,
        }}
      /> */}
      <Script
        id="afterInteractive"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3389176,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <Script
        id="afterInteractive"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/62977adc7b967b117992628a/1g4frfs04';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    </>
  );
};

export default Analytics;
