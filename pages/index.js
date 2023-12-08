import { Inter } from "next/font/google";
import Head from "next/head";
import TagManager from "react-gtm-module";

function Home() {
  return (
    <>
      <Head>
        <title>Nice Test</title>
      </Head>
      <div>{process.env.NODE_ENV}</div>
      <button
        onClick={() => {
          TagManager.dataLayer({
            dataLayer: {
              event: "custom_event",
              category: "horoscope",
              action: "click",
              label: "workAndStudy",
              values: {},
            },
          });
        }}
      >
        Click Me!
      </button>
    </>
  );
}

export default Home;
