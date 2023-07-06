import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-CQEX0HL2X3`}
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CQEX0HL2X3');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
