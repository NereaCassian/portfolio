import EmployersCard from '../components/EmployersCard';
import styles from '../styles/EmployersPage.module.css';

const EmployersPage = ({ employers }) => {
  return (
    <>
      <h1>Work Experince</h1>
      <div className={styles.container}>
        {employers.map((project) => (
          <EmployersCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const employers = [
    {
      "id": 3,
      "name": "Making Science",
      "image": "/making.jpg",
      "duration": " Jan 2023 - Present",
      "description": "I developed the role of a DevOps/SRE Engineer, specializing in the development and maintenance of infrastructures for internal products and external clients. I utilize automation tools such as Terraform and work with cloud providers like Google Cloud and AWS.",
      "tags": ["Terraform", "Ansible", "GCP", "Python"]
    },
    {
      "id": 2,
      "name": "Gigas",
      "image": "/gigas.webp",
      "duration": "Apr 2022 - Dec 2022 (10 months)",
      "description": "I worked as a Sysadmin and NV1 Support in cloud solutions, handling their management, maintenance, and providing customer support for the use of solutions and the deployment of their applications.",
      "tags": ["KVM", "Quemu", "mongodb", "MySQL", "node", "Python"]
    },
    {
      "id": 1,
      "name": "TEYS",
      "image": "/teys.jpg",
      "duration": "Feb 2022 - Apr 2022 (4 months)",
      "description": "Developed the role of internal tools developer for the processing of data obtained from surveys.",
      "tags": ["c", "MySQL", "mongodb", "Vue", "node"]
    }
  ]

  return {
    props: { title: 'Employers', employers },
  };
}

export default EmployersPage;
