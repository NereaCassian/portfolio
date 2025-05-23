import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';
import PurpleGuy from '../components/PurpleGuy';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={512}
            height={443}
            objectFit='contain'
            style={
              {
                opacity: '0.3',
              }
            }
          />
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Nerea Kalandadze</h1>
            <PurpleGuy/> 
            <br />
            <Link href="/employers">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/socials">
              <button className={styles.outlined}>My socials</button>
            </Link>
          </div>
          <br />
          <Image
            src="/pic.png"
            alt="Picture of the author"
            width={512}
            height={512}
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
