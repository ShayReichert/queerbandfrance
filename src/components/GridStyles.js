import React, { useEffect } from 'react'
import styled from 'styled-components'
import { stylesFilter } from '../hooks/useFilters'
import Style from './Style'

const Main = styled.div`
  display: none;
  max-height: 35rem;
  grid-row: 2 / 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  @media screen and (min-width: 768px) {
    display: flex;
    max-width: none;
    margin: initial;
  }
  ul {
    height: 90%;
    width: 90%;
    margin-bottom: 1rem;
    border-radius: 5px;
    background: #f1f1f154;
    backdrop-filter: blur(10px);
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    z-index: 1;
    @media screen and (min-width: 768px) {
      justify-content: space-between;
    }
    @media screen and (min-width: 1440px) {
      max-width: 60rem;
    }
    .active {
      color: white;
      background: #181a22;
      border-radius: 0.5rem;
    }
  }
`

const GridStyles = ({ styles, checkedStyles, removeActiveDistrict }) => {
  // Filter bands when a style is clicked and active
  useEffect(() => {
    stylesFilter(checkedStyles, removeActiveDistrict)
  }, [checkedStyles, removeActiveDistrict])

  return (
    <Main className="bloc2">
      <ul role="group">
        {styles.map((style, key) => {
          return <Style name={style} key={key} />
        })}
      </ul>
    </Main>
  )
}

export default GridStyles
