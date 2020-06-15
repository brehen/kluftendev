import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../../css/style.css'

const AboutMePic = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "berlinpic2.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid
      return (
        <Img
          className='w-16 h-16 md:w-24 md:h-24 rounded-sm border-4 border-brand shadow-med hidden md:flex'
          alt='Profile picture of Marius Kluften at a burger joint in Berlin.'
          fluid={imageData}
        />
      )
    }}
  />
)

export default AboutMePic
