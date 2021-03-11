import React, { useEffect } from "react"
import HeroSection from "./Hero/HeroSection"
import AboutMeSection from "./About Me/AboutMeSection"
import Experience from "./Experience/Experience"
import SkillsSection from "./Skills/SkillsSection"

import "../css/style.css"

import animateScrollTo from "animated-scroll-to"

const moveMe = (position) => {
  animateScrollTo(position)
}

const Layout = () => {
  useEffect(() => {
    //moveMe(0)
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <Experience />
    </>
  )
}

export default Layout
