import React, { useState } from 'react'
import Icon from './Icon'

const TrickyIcon = props => {
  const [currChild, setChild] = useState(0)
  return (
    <Icon className={props.className}>
      <span onClick={() => setChild(currChild + 1)}>
        {props.children[currChild % 2]}
      </span>
    </Icon>
  )
}

export default TrickyIcon
