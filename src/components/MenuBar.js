import React, { useRef, useLayoutEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import animateScrollTo from 'animated-scroll-to'

const moveMe = position => {
  animateScrollTo(position)
}

const moveActive = (previous, current) => {
  const previousEl = document.querySelector(previous)
  const currentEl = document.querySelector(current)
  if (previousEl) previousEl.classList.remove('active-section')
  currentEl.classList.add('active-section')
}

const MenuBar = () => {
  const currSection = useRef()
  const prevSection = useRef()
  const positionRef = useRef(true)

  useLayoutEffect(() => {
    if (positionRef.current === true) {
      positionRef.current = getPositions()
    }
  })

  const getPositions = () => {
    const aboutMePos =
      document.querySelector('#aboutMe').getBoundingClientRect().top
    const skillsPos =
      document.querySelector('#skills').getBoundingClientRect().top
    const expPos =
      document.querySelector('#experience').getBoundingClientRect().top
    return { aboutMePos, skillsPos, expPos }
  }

  // make them properties on a standard object

  useScrollPosition(({ prevPos, currPos }) => {
    const pos = positionRef.current
    if (-currPos.y >= pos.aboutMePos + 140) { document.querySelector('#menuBar').classList.add('fixed-menu') } else document.querySelector('#menuBar').classList.remove('fixed-menu')

    if (-currPos.y > pos.aboutMePos && -currPos.y < pos.skillsPos) {
      prevSection.current = currSection.current
      currSection.current = '#aboutMeNav'
      if (currSection.current !== prevSection.current) { moveActive(prevSection.current, currSection.current) }
    } else if (-currPos.y >= pos.skillsPos && -currPos.y < pos.expPos - 1) {
      prevSection.current = currSection.current
      currSection.current = '#skillsNav'
      if (currSection.current !== prevSection.current) { moveActive(prevSection.current, currSection.current) }
    } else if (-currPos.y >= pos.expPos) {
      prevSection.current = currSection.current
      currSection.current = '#experienceNav'
      if (currSection.current !== prevSection.current) { moveActive(prevSection.current, currSection.current) }
    }
  })
  return (
    <div
      className='text-xxs hidden sm:flex flex-col absolute right-05vw top-100 right-20'
      id='menuBar'
    >
      <div
        className='text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section active-section select-none'
        id='aboutMeNav'
        onClick={() => moveMe(positionRef.current.aboutMePos)}
      >
        About Me
      </div>
      <div
        className='text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section select-none'
        id='skillsNav'
        onClick={() => moveMe(positionRef.current.skillsPos + 2)}
      >
        Skills
      </div>
      <div
        className='text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section select-none'
        id='experienceNav'
        onClick={() => moveMe(positionRef.current.expPos + 2)}
      >
        Experience
      </div>
      <div className='hidden text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section select-none'>
        Education
      </div>
    </div>
  )
}

export default MenuBar
