// src/pages/components/Header.tsx

import Image from "next/image";
import logo from "../../images/logo.png";
import styles from "../../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={200} height={100} />
        </div>
        <Link href={`/components/Search`}>검색 페이지로 이동</Link>
        <ul className={styles.nav}>
          <li>
            <a href="#">Menu 1</a>
          </li>
          <li>
            <a href="#">Menu 2</a>
          </li>
          <li>
            <a href="#">Menu 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
