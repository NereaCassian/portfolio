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
        content="My portfolio website. Take a look 👀"
      />
      <meta property="og:image" content="https://new.nereacassian.com/card.png" />
      <meta property="og:url" content="https://new.nereacassian.com/" />
      <meta property="twitter:domain" content="new.nereacassian.com"/>
      <meta property="twitter:url" content="https://new.nereacassian.com/"/>
      <meta name="twitter:title" content="Nerea Kalandadze's portfolio"/>
      <meta name="twitter:description" content="My portfolio website. Take a look 👀"/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://new.nereacassian.com/card.png"/>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nerea Kalandadze',
};
