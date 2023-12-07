import { Inter } from "next/font/google";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Nice Test</title>
      </Head>
      <div>{process.env.NODE_ENV}</div>
      <button
        onClick={() => {
          gtag("event", "home_button_click", {
            event_category: "click",
            event_label: "button click",
            value: "double click",
          });
        }}
      >
        Click Me!
      </button>
    </>
  );
}

export default Home;
