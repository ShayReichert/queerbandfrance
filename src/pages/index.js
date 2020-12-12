import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'
import Cards from '../components/Cards'

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
    li {
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainGrid>
      <GripMap></GripMap>
      <GridStyles>
        <ul className="styles">
          {/* In alphabetic order */}
          <li>Cold Wave</li>
          <li>Post-punk</li>
          <li>Hip-Hop</li>
          <li>Electro</li>
          <li>Grunge</li>
          <li>Punk</li>
          <li>Synth-pop</li>
          <li>Metal</li>
          <li>Hardcore</li>
          <li>Pop-punk</li>
          <li>Garage</li>
          <li>Riot</li>
          <li>Indie</li>
          <li>Folk</li>
          <li>Contemporain</li>
          <li>Slam</li>
          <li>Expérimental</li>
          <li>Gabber</li>
          <li>Lo-fi</li>
          <li>Techno</li>
        </ul>
      </GridStyles>

      <GridCards>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </GridCards>
    </MainGrid>
  </Layout>
)

export default IndexPage
