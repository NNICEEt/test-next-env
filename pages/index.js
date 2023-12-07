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
          // gtag("event", "home_button_click", {
          //   event_category: "click",
          //   event_label: "button click",
          //   value: "double click",
          // });

          window.dataLayer.push({
            event: "event",
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
