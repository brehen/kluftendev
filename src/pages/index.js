import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/Hero/HeroSection';
import 'aos/dist/aos.css';
import MenuBar from '../components/MenuBar';
import lifecycle from 'react-pure-lifecycle';

const componentDidMount = props => {
  const isBrows = typeof window !== 'undefined';
  const AOS = isBrows ? require('AOS') : undefined;
  AOS.init();
};

// make them properties on a standard object
const methods = {
  componentDidMount
};

function IndexPage() {
  return (
    <>
      <MenuBar />
      <Layout>
        <SEO
          title="Home"
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />
        <HeroSection />
      </Layout>
    </>
  );
}

export default lifecycle(methods)(IndexPage);
