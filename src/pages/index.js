import React, { useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import 'aos/dist/aos.css'
import AOS from 'aos'
import MenuBar from '../components/MenuBar'


const IndexPage = () => {
  useEffect(() => {
    if(typeof window !== 'undefined') AOS.init()
  }, [])
  return (
    <>
      <MenuBar />
      <SEO
          title='Home'
          keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
        />
      <Layout/>
    </>
  )
}

export default IndexPage
