import React from 'react'

const fontSizes = { small: '2rem', medium: '4rem', large: '6rem' }

const HeroText = props => {
  return (
    <h1 style={{ fontSize: fontSizes[props.size], color: '#fff' }}>
      {props.text}
    </h1>
  )
}

export default HeroText
