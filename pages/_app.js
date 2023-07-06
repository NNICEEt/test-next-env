import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-6ECZTCMSXD`}
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6ECZTCMSXD');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
