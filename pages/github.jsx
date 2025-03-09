import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
          <div>
            <a 
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={user.avatar_url}
                className={styles.avatar}
                alt={user.login}
                width={50}
                height={50}
              />
            </a>
            <a 
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
            <h3 className={styles.username}>{user.login}</h3>
            </a>
          </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    let repos = await repoRes.json();
    
    if (!Array.isArray(repos)) {
      console.error('GitHub API returned:', repos);
      repos = [];
    } else {
      repos = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
    }

    return {
      props: { 
        title: 'GitHub', 
        repos, 
        user 
      },
      revalidate: 3600, // Revalidate once per hour instead of every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return {
      props: { 
        title: 'GitHub', 
        repos: [], 
        user: { login: process.env.NEXT_PUBLIC_GITHUB_USERNAME, public_repos: 0, followers: 0, avatar_url: '' } 
      },
      revalidate: 60, // Try again more frequently if there was an error
    };
  }
}

export default GithubPage;
