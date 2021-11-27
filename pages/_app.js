import React from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Router from "next/router";
import Loader from "../components/Loader/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
