import React, { useEffect } from 'react'
import styled from 'styled-components'
import GridCards from './GridCards'
import GridStyles from './GridStyles'
import GridMap from './GridMap'
import Cookie from './Cookie'

const MainGrid = styled.div`
  margin: auto;
  margin-top: 5rem;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 42% 58%;
    grid-template-rows: 58% 42%;
    height: 100%;
    width: 100%;
    margin-top: 0;
  }
`

const MainGrids = ({
  bands,
  styles,
  allDistricts,
  checkedDistricts,
  checkedStyles,
}) => {
  // Toggle menu on click on burger (smartphone and tablet screen only)
  useEffect(() => {
    const burger = document.querySelector('#burger')
    function toggleMenu() {
      document.body.classList.toggle('menu-active')
    }
    burger.addEventListener('click', toggleMenu)
    return function () {
      burger.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <MainGrid>
      <GridMap
        allDistricts={allDistricts}
        checkedDistricts={checkedDistricts}
      />
      <GridStyles styles={styles} checkedStyles={checkedStyles} />
      <GridCards bands={bands} />
      <Cookie />
    </MainGrid>
  )
}

export default MainGrids
