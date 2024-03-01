import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Save your thoughts forever.</h1>
        <p className={styles.desc}>
          Welcome to the heaven of memories and thoughts. Save your thoughts
          forever...
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link href="/about">Learn More</Link>
          </button>
          <button className={styles.button}>
            <Link href="/contact">Contact</Link>
          </button>
        </div>
        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
