import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';
import React from 'react';
import { useRouter } from 'next/router';

const openUrlInNewTab = (url) => {
  window.open(url, '_blank');
};


const Titlebar = () => {
  const aLittleSecret = () => {
    const video = document.createElement('video');
    video.src = '/secret.webm';
    video.autoplay = true;
    video.controls = false;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.zIndex = '9999';
    document.body.appendChild(video);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push('/test');
  };

  
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Nerea Kalandadze - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize} onClick={handleClick}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close} onClick={aLittleSecret}></span>
      </div>
    </section>
  );
};

export default Titlebar;
