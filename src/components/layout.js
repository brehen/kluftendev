import React from 'react';
import HeroSection from './Hero/HeroSection';
import AboutMeSection from './About Me/AboutMeSection';
import Experience from './Experience/Experience';
import SkillsSection from './Skills/SkillsSection';

import '../css/style.css';

const Layout = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <Experience />
    </>
  );
};

export default Layout;
