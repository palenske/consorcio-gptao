import Head from "next/head";
import { useWhitelabel } from "../../contexts/WhitelabelContext";

const PortalHead = ({ pageTitle }) => {
  const { custom } = useWhitelabel();
  const faviconPath = `favicons/${custom?.faviconSet}/`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>
        {custom?.title}
        {pageTitle ? ` - ${pageTitle}` : ""}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={custom?.description} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${faviconPath}apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${faviconPath}apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${faviconPath}apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${faviconPath}apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${faviconPath}apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${faviconPath}apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${faviconPath}apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${faviconPath}apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${faviconPath}apple-icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`${faviconPath}android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${faviconPath}favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${faviconPath}favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${faviconPath}favicon-16x16.png`}
      />
      <link rel="manifest" href={`${faviconPath}manifest.json`} />
      <meta name="msapplication-TileColor" content={custom?.primaryColor} />
      <meta
        name="msapplication-TileImage"
        content={`${faviconPath}ms-icon-144x144.png`}
      />
      <meta name="theme-color" content={custom?.primaryColor} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            ${custom?.whitelabel?.theme}
          }
      `,
        }}
      />
    </Head>
  );
};

export default PortalHead;
