import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nerea Kalanadadze's portfolio website."
      />
      <meta
        name="keywords"
        content="portfolio, nerea, kalandadze, nerea kalandadze"
      />
      <meta property="og:title" content="Nerea Kalandadze's portfolio" />
      <meta
        property="og:description"
        content="A DevOPs Engineer's portfolio website."
      />
      <meta property="og:image" content="https://cloud.nereacassian.com/index.php/apps/sharingpath/nereacassian/public/cdn/img/card.png" />
      <meta property="og:url" content="https://nereacassian.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nerea Kalandadze',
};
