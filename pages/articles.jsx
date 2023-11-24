import React, { useEffect, useState } from 'react';
import styles from '../styles/ArticlesPage.module.css';
import ArticleCard from '../components/ArticleCard';


const ArticlesPage = () => {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getLatestPosts = async () => {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}&limit=5`);
        const data = await response.json();
        const posts = data.posts;
        setPosts(posts);
      };

      getLatestPosts();

    }, []);

    return (
      <div>
        <h1>
          Recent Posts from my blog
        </h1>
        <br />
        <div className={styles.icontainer}>
          {posts.map((post) => (
            <ArticleCard post={post} />
          ))}
        </div>
      </div>
      
    );
    
  };

  export async function getStaticProps() {
    return {
      props: { title: 'Articles'},
      revalidate: 60,
    };
  }

export default ArticlesPage;
