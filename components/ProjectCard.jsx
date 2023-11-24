import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={600} width={600} alt={project.name} objectFit="cover" />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <h4>{project.duration}</h4>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
