// str/pages/components/Header.tsx

import Image from "next/image";
import logo from "../../images/logo.png";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={200} height={100} />
        </div>
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
