import Image from 'next/image';
import styles from '../styles/AboutPage.module.css';
const AboutPage = () => {
  return (
    <div className={styles.gigacontainer}>
      <div className={styles.supracontainer}>
        <h1>A Little Bit About Me</h1>
        <p style={{marginBottom: '10px'}}>Since I was a kid, I was passionate for the tech world. My dad was an early Ubuntu adopter so the only pc in our house runs ubuntu ever since. Once, I was gifted a copy of Beyond Good & Evil, but oviously the CD was for Windows, so being 9 years old I learned how to use Wine to be able to play that game.</p>
        <div className={styles.container}>
          <Image
            src="/bgae.webp"
            alt="Beyond Good & Evil"
            width={480}
            height={270}
            objectFit='contain'/>
          <p className={styles.paragraph}>
            When I was a little girl, I was fascinated by witnessing the technology of my daily life in action. I experienced the dawn of portable devices and touchscreen interfaces,
            watching with young eyes as the world of computing and communications grew by leaps and bounds. Back then, I used to tell everyone that I wanted to be a Telecommunications 
            Engineer, because at that time in Spain, Computer Engineering wasn't a highly developed field. As I grew older, I started working on small projects. I first learned to use 
            and program Arduino boards; creating a device, for instance, that alerted the user when the room's noise level exceeded the legal limit. Later on, I delved into web 
            development and created several simple websites for fan communities I belonged to. All of this led me to spend several summers developing and managing servers for various 
            online games like Minecraft or GTA V. This experience broadened my knowledge of UNIX operating systems, databases, APIs, containerization tools, load balancers, firewalls, 
            the cloud providers I used, and domain and DNS management.
          </p>
        </div>
        <br />
        <div className={styles.container}>
          <p className={styles.paragraph} style={{marginRight: '10px'}}> 
          Upon completing my university studies, I was still uncertain about which programming sector to pursue. It was at that moment when the term DevOps started gaining popularity,
          and I discovered that it was my passion. I had always enjoyed server management, and when I found out about the wonders of automation facilitated by tools like Terraform
          or Ansible, and how Docker containers allowed you to deploy an app and its entire infrastructure with a single command, I was fascinated. I began to specialize in the
          field, undertaking small projects until I eventually landed a position as a DevOps/SRE Engineer at Making Science. I love learning new things, and I frequently immerse
          myself in new development technologies. As it happens, this very portfolio has allowed me to learn how to use NEXTJS and yarn.
          </p>  
          <Image
            src="/me.jpg"
            alt="Beyond Good & Evil"
            width={240}
            height={270}
            objectFit='contain'/>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
