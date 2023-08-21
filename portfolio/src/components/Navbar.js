// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {/* <div className={styles.logo}>
        <Link href="/">MSams</Link>
      </div> */}
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link href="/portfolio">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about-me">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
