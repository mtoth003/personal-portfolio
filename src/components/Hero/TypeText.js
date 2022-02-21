import React from 'react'
import TypeAnimation from 'react-type-animation';
import styled from 'styled-components';


function TypeText() {
  return (
    <TypeDesign>
      <TypeAnimation
        cursor={false}
        sequence={['JavaScript', 3500, 'Ruby on Rails', 3500, 'React', 3500, 'SQL', 3500]}
        repeat={Infinity}
        wrapper="h2"
      />
    </TypeDesign>
  )
}

const TypeDesign = styled.div `
  color: #00FFFF;
`

export default TypeText