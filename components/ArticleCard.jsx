import Image from 'next/image';
import styles from '../styles/ArticleCard.module.css';

const postCard = ({ post }) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <Image
        src={post.feature_image}
        alt={post.title}
        className={styles.image}
        width={300}
        height={300}
        objectFit="cover" // Add objectFit property
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </a>
  );
};

export default postCard;