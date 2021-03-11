import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../../css/style.css"
import animateScrollTo from "animated-scroll-to"
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const moveMe = (direction) => {
  var aboutMeOffset =
    document.querySelector("#aboutMe").getBoundingClientRect().top +
    window.pageYOffset
  if (direction === "down") animateScrollTo(aboutMeOffset - 300)
  else animateScrollTo(0)
}
const BackgroundSection = ({ className, currDirection }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero-background2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="h-screen w-screen bg-fixed"
          fluid={imageData}
        >
          <div className="h-screen bg-fifty text-white flex flex-col justify-between items-center">
            <div className="navbar" />
            <div className="flex flex-col ju__stify-center items-center">
              <div className="w-10/12 md:w-7/12 flex justify-center flex-col items-center">
                <h1 className="text-4xl w-full">I'm Marius Nilsen Kluften.</h1>
                <h3 className="text-xl my-8 text-gray">
                  I'm a <span>Front-end Developer</span> based in
                  <span> Oslo</span>. Currently working for
                  <span>
                    {" "}
                    <img
                      className="inline h-4 m-0 align-baseline"
                      src="https://www.itverket.no/wp-content/themes/itverket/assets/images/logo.png"
                      alt="Logo of current employer, ITVerket"
                    />{" "}
                  </span>{" "}
                  creating cool
                  <span> experiences</span> for our customers.
                </h3>
              </div>
            </div>
            <div className="text-4xl floating cursor-pointer self-end right-5vw">
              {currDirection}
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const HeroSection = () => {
  const [flipArrow, setFlipArrow] = useState(
    <IoIosArrowDropdownCircle
      data-aos="flip-down"
      onClick={() => moveMe("down")}
    />
  )

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (-currPos.y >= 500 && -currPos.y > -prevPos.y) {
        setFlipArrow(
          <IoIosArrowDropupCircle
            data-aos="flip-down"
            onClick={() => moveMe("up")}
          />
        )
      } else if (-currPos.y < 500) {
        setFlipArrow(
          <IoIosArrowDropdownCircle
            data-aos="flip-up"
            onClick={() => moveMe("down")}
          />
        )
      }
    },
    [flipArrow]
  )
  return (
    <header id="hero" className="pb-16 bg-branddark sm:pb-0">
      <BackgroundSection currDirection={flipArrow} />
    </header>
  )
}

export default HeroSection
