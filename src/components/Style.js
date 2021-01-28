import React from 'react'
import styled from 'styled-components'

const StyleLi = styled.li`
  height: 3rem;
  min-width: 5rem;
  margin: 0.3rem 1rem;
  padding: 0.5rem 2rem;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
  &:hover,
  &:focus-visible {
    @media screen and (min-width: 768px) {
      color: white;
      background: #181a22;
      border-radius: 0.5rem;
      opacity: 0.8;
    }
  }
`

const Style = ({ name }) => {
  return (
    <>
      <StyleLi className="band-style" tabIndex="0" aria-label={name}>
        {name}
      </StyleLi>
    </>
  )
}

export default Style
