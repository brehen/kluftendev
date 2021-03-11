import React, { useRef, useEffect, useLayoutEffect } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import animateScrollTo from "animated-scroll-to"

const moveMe = (position) => {
  animateScrollTo(position)
}

const moveActive = (previous, current) => {
  const previousEl = document.querySelector(previous)
  const currentEl = document.querySelector(current)
  if (previousEl) previousEl.classList.remove("active-section")
  currentEl.classList.add("active-section")
}

const MenuBar = () => {
  const currSection = useRef()
  const prevSection = useRef()
  const [positions, setPositions] = React.useState({})

  useLayoutEffect(() => {
    setTimeout(() => setPositions(getPositions()), 500)
  }, [])

  //window.addEventListener("resize", () => setPositions(getPositions()))

  const getPositions = () => {
    const heroPos =
      document.querySelector("#hero").getBoundingClientRect().bottom +
      window.pageYOffset
    const aboutMePos =
      document.querySelector("#aboutMe").getBoundingClientRect().top +
      window.pageYOffset -
      150
    console.log(document.querySelector("#aboutMe").getBoundingClientRect())
    const skillsPos =
      document.querySelector("#skills").getBoundingClientRect().top +
      window.pageYOffset -
      150
    const expPos =
      document.querySelector("#experience").getBoundingClientRect().top +
      window.pageYOffset -
      150
    return { heroPos, aboutMePos, skillsPos, expPos }
  }

  // make them properties on a standard object

  useScrollPosition(({ prevPos, currPos }) => {
    const y = -currPos.y
    const pos = positions
    console.log(y + 200, pos.heroPos)
    if (y + 100 > positions.heroPos) {
      document.querySelector("#menuBar").classList.add("fixed-menu")
    } else document.querySelector("#menuBar").classList.remove("fixed-menu")

    if (y >= positions.aboutMePos && y <= positions.skillsPos) {
      prevSection.current = currSection.current
      currSection.current = "#aboutMeNav"
      if (currSection.current !== prevSection.current) {
        moveActive(prevSection.current, currSection.current)
      }
    } else if (y >= positions.skillsPos && y < positions.expPos - 150) {
      prevSection.current = currSection.current
      currSection.current = "#skillsNav"
      if (currSection.current !== prevSection.current) {
        moveActive(prevSection.current, currSection.current)
      }
    } else if (y > positions.expPos - 150) {
      prevSection.current = currSection.current
      currSection.current = "#experienceNav"
      if (currSection.current !== prevSection.current) {
        moveActive(prevSection.current, currSection.current)
      }
    }
  })
  return (
    <div
      className="text-xxs hidden sm:flex flex-col absolute right-05vw top-100 right-20"
      id="menuBar"
    >
      <div
        className="text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section active-section select-none"
        id="aboutMeNav"
        onClick={() => moveMe(positions.aboutMePos - 200)}
      >
        About Me
      </div>
      <div
        className="text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section select-none"
        id="skillsNav"
        onClick={() => moveMe(positions.skillsPos + 1)}
      >
        Skills
      </div>
      <div
        className="text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section select-none"
        id="experienceNav"
        onClick={() => moveMe(positions.expPos)}
      >
        Experience
      </div>
      <div className="hidden text-gray-700 text-center bg-cardbackground px-4 py-2 cursor-pointer nav-section select-none">
        Education
      </div>
    </div>
  )
}

export default MenuBar
