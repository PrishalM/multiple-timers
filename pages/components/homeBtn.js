import Link from "next/link";

import homePageStyles from "../../styles/homepage.module.css";

export default function homeBtn() {
  return (
    <Link href="/" className={homePageStyles.counterButton}>
      <button className={homePageStyles.button}>Home</button>
    </Link>
  );
}
