import React, { useState } from 'react'
import styled from 'styled-components'

const StyleLi = styled.li`
  height: 3rem;
  min-width: 5rem;
  margin: 0.3rem 1rem;
  padding: 0.5rem 2rem;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: white;
    background: #181a22;
    border-radius: 0.5rem;
  }
`

const Style = ({ name }) => {
  const [isActive, setIsActive] = useState(false)
  let toggleActive = ''
  isActive && (toggleActive = 'active')

  return (
    <>
      <StyleLi onClick={() => setIsActive(!isActive)} className={toggleActive}>
        {name}
      </StyleLi>
    </>
  )
}

export default Style
