import styles from '../styles/SocialsCode.module.css';

const socialItems = [
  {
    social: 'My Blog',
    link: 'blog.nereacassian.com',
    href: 'https://blog.nereacassian.com/',
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
    href: 'https://www.twitter.com/NereaCassian',
  },
  {
    social: 'instagram',
    link: 'NereaCassian',
    href: 'https://www.instagram.com/nereacassian',
  }
];

const SocialCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span>&#123;</span>
      </p>
      <p className={styles.line}>
        <span className={styles.className}>&nbsp;&nbsp;&nbsp;"socials":</span> &#123;
      </p>
      {socialItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{item.social}":{' '}
          <a href={item.href} target="_blank" rel="noopener">
            "{item.link}"
          </a>
          {index !== socialItems.length - 1 ? ',' : ''}
        </p>
      ))}
      <p className={styles.line}>&nbsp;&nbsp;&nbsp;&#125;</p>  
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default SocialCode;
