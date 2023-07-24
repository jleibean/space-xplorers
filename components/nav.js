import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "./nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";


function NavBar() {
  const router = useRouter();
  console.log('*****path', router.pathname);
  return (
    <section className={styles.navBar}>
    <div className={`${styles.brandMarker}`}>
        <Image
          priority
          src="/assets/shared/logo.svg"
          className={utilStyles.borderCircle}
          height={40}
          width={40}
          alt=""
        />
      </div>
      <div className={`${styles.divider}`}></div>
      <div className={`${styles.navbarPanel}`}>
      <Link href="/" className={`${router.pathname === "/" ? styles.active : ''} ${styles.links}`}>
        <span className={styles.linkNumber}> 00 </span> Home
      </Link>
      <Link href="/destinations" className={`${router.pathname === "/destinations" ? styles.active : ''} ${styles.links}`}>
        <span className={styles.linkNumber}> 01 </span> Destinations
      </Link>
      <Link href="/crew" className={`${router.pathname === "/crew" ? styles.active : ''} ${styles.links}`}>
        <span className={styles.linkNumber}> 02 </span> Crew
      </Link>
      <Link href="/tech" className={`${router.pathname === "/tech" ? styles.active : ''} ${styles.links}`}>
        <span className={styles.linkNumber}> 03 </span> Technology
      </Link>
      </div>
    </section>
  );
}

export default NavBar;
