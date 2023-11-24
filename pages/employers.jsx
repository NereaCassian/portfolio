import EmployersCard from '../components/EmployersCard';
import { getEmployers } from './api/employers';
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
  const employers = getEmployers();

  return {
    props: { title: 'Employers', employers },
  };
}

export default EmployersPage;
