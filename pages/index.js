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
      <div>{display}</div>
      <div>{process.env.NODE_ENV}</div>
      <button onClick={() => {
        gtag("event", 'home_button_click', {
          event_category: 'click',
          event_label: 'button click',
          value: 'double click',
        });
      }}>Click Me!</button>
    </>
  );
}

export default Home;
