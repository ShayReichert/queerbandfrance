import React, { useEffect } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'

import Card from '../components/Card'
import Style from '../components/Style'

import { styles, bands } from '../Datas'

import MyMap from '../assets/map_full.svg'

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 42% 58%;
  grid-template-rows: 58% 42%;
  height: 100%;
  width: 100%;
  margin: auto;
`

const GridMap = styled.div`
  position: relative;
  grid-row: 1 / 2;
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
const GridStyles = styled.div`
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    height: 90%;
    width: 90%;
    margin-bottom: 1rem;
    border-radius: 5px;
    background: #f1f1f154;
    backdrop-filter: blur(10px);
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 1;
    .active {
      color: white;
      background: #181a22;
      border-radius: 0.5rem;
    }
  }
`

const GridCards = styled.div`
  overflow-y: scroll;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const IndexPage = () => {
  useEffect(() => {
    const regions = Array.from(document.querySelectorAll('[data-name]'))
    const displayNameHere = document.querySelector('.gridmap')

    function toggleClass() {
      const path = this.firstElementChild
      path.classList.toggle('active')
    }

    function displayName() {
      displayNameHere.innerHTML = `${this.dataset.name}`
    }

    function hideName() {
      displayNameHere.innerHTML = ``
    }

    regions.map((region) => {
      region.addEventListener('click', toggleClass)
      region.addEventListener('mouseover', displayName)
      region.addEventListener('mouseout', hideName)
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <MainGrid>
        <GridMap>
          <MyMap />
          <p className="gridmap"></p>
        </GridMap>

        <GridStyles>
          <ul>
            {/* In alphabetic order */}
            {styles.map((style, key) => {
              return <Style name={style} key={key} />
            })}
          </ul>
        </GridStyles>

        <GridCards>
          {bands.map((band, key) => {
            return <Card name={band} key={key} />
          })}
        </GridCards>
      </MainGrid>
    </Layout>
  )
}
export default IndexPage
