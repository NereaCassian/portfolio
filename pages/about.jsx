const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>Since I was i kid </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
