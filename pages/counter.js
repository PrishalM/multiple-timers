"use client";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import homePageStyles from "../styles/homepage.module.css";

import HomeBtn from "./components/homeBtn";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Counter - next test</title>
        <meta name="description" content="Counter page - Test next app" />
        <link rel="icon" href="/NT.png" />
      </Head>
      <div className={homePageStyles.outerDiv}>
        <div className={homePageStyles.innerDiv}>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>

        <HomeBtn />
      </div>
    </div>
  );
}
