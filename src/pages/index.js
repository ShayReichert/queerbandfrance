import React, { useEffect } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'

import Card from '../components/Card'
import Style from '../components/Style'

import MyMap from '../assets/map_full.svg'

import { styles, bands } from '../Datas'

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

const GridMap = styled.div`
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
const GridStyles = styled.div`
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

const GridCards = styled.div`
  overflow-y: scroll;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (min-width: 1240px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    max-width: 100.8rem;
    margin: 0 auto;
    justify-content: flex-start;
  }
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

    // eslint-disable-next-line
    regions.map((region) => {
      region.addEventListener('click', toggleClass)
      region.addEventListener('mouseover', displayName)
      region.addEventListener('mouseout', hideName)
    })
  }, [])

  useEffect(() => {
    const burger = document.querySelector('#burger')

    function toggleMenu() {
      document.body.classList.toggle('menu-active')
    }

    burger.addEventListener('click', toggleMenu)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <MainGrid>
        <GridMap className="bloc1">
          <MyMap />
          <p className="gridmap"></p>
        </GridMap>

        <GridStyles className="bloc2">
          <ul>
            {/* In alphabetic order */}
            {styles.map((style, key) => {
              return <Style name={style} key={key} />
            })}
          </ul>
        </GridStyles>

        <GridCards className="bloc3">
          {bands.map((band, key) => {
            return <Card name={band} key={key} />
          })}
        </GridCards>
      </MainGrid>
    </Layout>
  )
}
export default IndexPage
