import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NavBar from "../components/nav";
import styles from "../components/home.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.mainSection}>
        <NavBar></NavBar>
        <section className={styles.mainBlock}>
          <div className={styles.callToAction}>
            <h5>So, you want to travel to</h5>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={`${styles.explore}`}>
            <Button bssize="large" className={`${styles.roundedCircle} rounded-circle`}>
            <h4 className={styles.buttonText}>
            <Link href="/destinations" className={styles.exploreMore}>Explore</Link>
            </h4>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
