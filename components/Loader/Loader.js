import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoader from "react-loader-spinner";
import styles from "./Loader.module.css";
import Image from "next/image";

export default function Loader() {
  return (
    <div className={styles.loaderActive}>
      <Image src="/logoshort.png" height="110" alt="loader" width="100" />
      <ReactLoader type="ThreeDots" color="white" height={80} width={80} />
    </div>
  );
}
