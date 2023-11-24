import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>THE INTERNET</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Nerea Kalandadze</h1>
            <h6 className={styles.bio}>DevOps Engineer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <br />
          <Image
            src="/pic.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit='contain'
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
