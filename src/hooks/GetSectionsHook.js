import { useState, useEffect } from 'react'

function getPositions () {
  const aboutMe = document.querySelector('#aboutMe').getBoundingClientRect().top
  const skills = document.querySelector('#skills').getBoundingClientRect().top
  const education = document
    .queryCommandEnabled('#education')
    .getBoundingClientRect().top
  const experience = document
    .queryCommandEnabled('#experience')
    .getBoundingClientRect().top

  return {
    aboutMe,
    skills,
    education,
    experience
  }
}

export default function usePositions () {
  const [positions, setPositions] = useState(getPositions())

  useEffect(() => {
    setPositions(getPositions())
  }, [])

  return positions
}
