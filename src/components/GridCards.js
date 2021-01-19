import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Main = styled.div`
  overflow-y: scroll;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 1440px) {
    max-width: 100.8rem;
    margin: 0 auto;
  }
`

const GridCards = ({ bands }) => {
  return (
    <Main className="bloc3">
      {bands.map((band) => {
        const {
          name,
          name_alt,
          style,
          city,
          district,
          image,
          isQueer,
        } = band.data
        return (
          <Card
            name={name}
            name_alt={name_alt}
            styles={style}
            city={city}
            district={district}
            image={image}
            isQueer={isQueer}
            allData={band.data}
            key={band.id}
          />
        )
      })}
    </Main>
  )
}

export default GridCards
