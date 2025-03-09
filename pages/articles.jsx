import React, { useEffect, useState } from 'react';
import styles from '../styles/ArticlesPage.module.css';
import ArticleCard from '../components/ArticleCard';

const ArticlesPage = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(!initialPosts.length);

  useEffect(() => {
    const getLatestPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}&limit=5`);
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialPosts.length) {
      getLatestPosts();
    }
  }, [initialPosts]);

  return (
    <div>
      <h1>Recent Posts from my blog</h1>
      <br />
      {loading ? (
        <p>Loading latest posts...</p>
      ) : (
        <div className={styles.icontainer}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))
          ) : (
            <p>No posts found. Check back soon!</p>
          )}
        </div>
      )}
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
