// import { Analytics } from "@vercel/analytics/react";

import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  );
}
