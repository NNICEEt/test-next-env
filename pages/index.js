import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay(process.env.NEXT_PUBLIC_DISPLAY_ENV);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-CQEX0HL2X3`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CQEX0HL2X3');
        `}
      </Script>
      <div>{display}</div>
      <div>{process.env.NODE_ENV}</div>
      <button onClick={() => {
        window.gtag("event", 'home_button_click', {
          event_category: 'click',
          event_label: 'button click',
          value: 'test',
        });
      }}>Click Me!</button>
    </>
  );
}

export default Home;
