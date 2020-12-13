import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'

import Card from '../components/Card'
import Style from '../components/Style'

import { styles, bands } from '../Datas'

import MyMap from '../images/map_full.svg'

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 42% 58%;
  grid-template-rows: 58% 42%;
  height: 100%;
  width: 100%;
  margin: auto;
`

const GripMap = styled.div`
  grid-row: 1 / 2;
  img {
    height: 100%;
    width: 100%;
  }
`
const GridStyles = styled.div`
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .styles {
    height: 90%;
    width: 90%;
    margin-bottom: 1rem;
    border-radius: 5px;
    background: #f1f1f154;
    backdrop-filter: blur(20px);
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainGrid>
      <GripMap>
        <img src={MyMap} alt="france map" />
      </GripMap>

      <GridStyles>
        <ul className="styles">
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

export default IndexPage
