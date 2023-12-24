import styles from '../styles/SocialsCode.module.css';


const socialItems = [
  {
    social: 'My Blog',
    link: 'blog.yellowumbrella.dev',
    href: 'https://blog.yellowumbrella.dev/',
  },
  {
    social: 'email',
    link: 'nerea@nereacassian.com',
    href: 'mailto:nerea@nereacassian.com',
  },
  {
    social: 'github',
    link: 'NereaCassian',
    href: 'https://github.com/NereaCassian/',
  },
  {
    social: 'linkedin',
    link: 'Nerea Kalandadze',
    href: 'https://www.linkedin.com/in/nerea-kalandadze-22590b165/',
  },
  {
    social: 'twitter',
    link: 'NereaCassian',
    href: 'https://www.twitter.com/NereaCassian/',
  },
  {
    social: 'instagram',
    link: 'NereaCassian',
    href: 'https://www.instagram.com/nereacassian/',
  },
  {
    social: 'Linkstack',
    link: 'linkstack.nereacassian.com',
    href: 'https://linkstack.nereacassian.com/',
  },
];

const SocialCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span>&#123;</span>
      </p>
      <p className={styles.line}>
        <span className={styles.indent}>"socials":</span> &#123;
      </p>
      {socialItems.slice(0, 7).map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.doubleIndent}>"{item.social}":{' '}</span>
          <a href={item.href} target="_blank" rel="noopener">
            "{item.link}"
          </a>
        </p>
      ))}
      {socialItems.slice(7, socialItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.doubleIndentNine}>"{item.social}":{' '}</span>
          <a href={item.href} target="_blank" rel="noopener">
            "{item.link}"
          </a>
        </p>
      ))}       
      <p className={styles.line}><span className={styles.indent}>&#125;</span></p>  
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default SocialCode;
