import "../styles/globals.css";
import Router from "next/router";
import "../public/nprogress.css";
import Head from "next/head";
import NProgress from "nprogress";
import Button from "../components/Button";
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Button />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
