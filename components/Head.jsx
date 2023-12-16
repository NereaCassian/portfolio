import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Nerea Kalanadadze's website."
      />
      <meta
        name="keywords"
        content="portfolio, nerea, kalandadze, nerea kalandadze"
      />
      <meta property="og:title" content="Nerea Kalandadze's web" />
      <meta
        property="og:description"
        content="This is my website. Take a look 👀"
      />
      <meta property="og:image" content="https://nereacassian.com/card.png" />
      <meta property="og:url" content="https://nereacassian.com/" />
      <meta property="twitter:domain" content="nereacassian.com"/>
      <meta property="twitter:url" content="https://nereacassian.com/"/>
      <meta name="twitter:title" content="Nerea Kalandadze's portfolio"/>
      <meta name="twitter:description" content="This is my website. Take a look 👀"/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nereacassian.com/card.png"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-F5GC74K35R"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-F5GC74K35R');
      </script>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nerea Kalandadze',
};
