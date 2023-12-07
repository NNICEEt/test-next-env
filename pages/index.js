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
              event: "nice_click",
              eventProps: {
                category: "tracking_event_1",
                action: "click",
                label: "click_event_test_1",
              },
            },
          });

          TagManager.dataLayer({
            event: "nice_click",
            eventProps: {
              category: "tracking_event_2",
              action: "click",
              label: "click_event_test_2",
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
