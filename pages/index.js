import Head from "next/head";
import Link from "next/link";

import homePageStyles from "../styles/homepage.module.css";

import HomeBtn from "./components/homeBtn";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - next test</title>
        <meta name="description" content="Test next app" />
        <link rel="icon" href="/NT.png" />
      </Head>
      <div className={homePageStyles.outerDiv}>
        <div className={homePageStyles.innerDiv}>
          <Link href="/counter" className={homePageStyles.counterButton}>
            <button className={homePageStyles.button}>Counter</button>
          </Link>

          <HomeBtn />
        </div>
      </div>
    </div>
  );
}
