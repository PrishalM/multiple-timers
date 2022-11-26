import Head from "next/head";
import Link from "next/link";

import homePageStyles from "../styles/homepage.module.css";

export default function Home() {
  return (
    <main className={homePageStyles.main}>
      <Head>
        <title>Multiple Timers</title>
        <meta name="description" content="Multiple Timers" />
        <link rel="icon" href="/mt.png" />
      </Head>
      <Link href="/timer" className={homePageStyles.timerButtonLink}>
        <button className={homePageStyles.timerButton}>
          <svg
            className={homePageStyles.timerButtonIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#2fd058"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </Link>
    </main>
  );
}
