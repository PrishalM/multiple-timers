"use client";

import Head from "next/head";
import Link from "next/link";

import newTimerStyles from "../styles/newTimer.module.css";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className={newTimerStyles.main}>
      <Head>
        <title>Multiple Timers</title>
        <meta name="description" content="Multiple Timers" />
        <link rel="icon" href="/mt.png" />
      </Head>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div className={newTimerStyles.labelGroup}>
        <label className={newTimerStyles.labelText} for="label">
          Label
        </label>
        <input
          className={newTimerStyles.labelInput}
          id="label"
          type="text"
        ></input>
      </div>
      <div className={newTimerStyles.buttonContainer}>
        <Link href="/" className={newTimerStyles.cancelButtonLink}>
          <button className={newTimerStyles.cancelButton}>Cancel</button>
        </Link>

        <button className={newTimerStyles.startButton}>Start</button>
      </div>

      <div className={newTimerStyles.timerEndGroup}>
        <div className={newTimerStyles.timerEndDiv}>
          <p className={newTimerStyles.timerEndText}>When Timer Ends</p>
          <p className={newTimerStyles.timerEndSetText}>Radar</p>
          <svg
            className={newTimerStyles.timerEndIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="#5A595E"
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
