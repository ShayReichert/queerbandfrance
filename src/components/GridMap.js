import React, { useEffect } from 'react'
import styled from 'styled-components'
import { districtsFilter } from '../hooks/useFilters'
import MyMap from '../assets/map_full.svg'

const Main = styled.div`
  position: relative;
  grid-row: 1 / 2;
  display: none;
  @media screen and (min-width: 768px) {
    display: block !important;
  }
  img {
    height: 100%;
    width: 100%;
  }
  p {
    position: absolute;
    bottom: -1px;
    left: 3px;
    width: 70%;
    height: 3rem;
    text-align: center;
    font-size: 1.8rem;
    font-family: 'Archivo';
    opacity: 0.9;
  }
`
const GridMap = ({ allDistricts, checkedDistricts }) => {
  // // Filter bands when a districts is clicked and active
  useEffect(() => {
    districtsFilter(checkedDistricts, allDistricts)
  }, [checkedDistricts, allDistricts])

  return (
    <Main className="bloc1">
      <MyMap />
      <p className="gridmap"></p>
    </Main>
  )
}

export default GridMap
