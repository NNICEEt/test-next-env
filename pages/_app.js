import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MTWP4X29" });
  });

  return <Component {...pageProps} />;
}

export default App;
