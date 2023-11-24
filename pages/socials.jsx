import { useState } from 'react';
import SocialCode from '../components/SocialsCode';
import styles from '../styles/SocialsPage.module.css';

const SocialsPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Reach Out Via Socials</h1>
        <SocialCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Socials' },
  };
}

export default SocialsPage;
