import styles from '../styles/ContactCode.module.css';

const contactItems = [
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

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
