import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import CardLinks from './CardLinks'
import { resizeNames } from '../hooks/useResize'
import placeholder from '../../static/images/placeholder-img.jpg'

const Main = styled.div`
  /* background: rgba(241, 241, 241, 0.05); */
  background: #00b1ff17;
  height: 35rem;
  width: 23rem;
  margin: 0.5rem;
  border-radius: 0.8rem;
  cursor: default;
  overflow: hidden;
  backdrop-filter: blur(20px);
  z-index: 1;
  opacity: 0.7;
  transition: all 300ms;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    height: 32rem;

    &:hover button,
    &:focus button,
    &:active button {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
const ImgBand = styled.div`
  height: 45%;
  width: 100%;
  overflow: hidden;
  img {
    border-radius: 0.8rem 0.8rem 0 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const InfosBand = styled.div`
  max-height: 40%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.2rem;
  font-family: 'Roboto', Helvetica, sans-serif;
  h2 {
    margin: 0 auto;
    margin-bottom: 1rem;
    font-size: 2.6rem;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
  }
  p {
    font-size: 1.3rem;
    letter-spacing: 0.2px;
    line-height: 1.8;
  }
  .smaller1 {
    font-size: 1rem !important;
  }
  .smaller2 {
    font-size: 1.4rem;
  }
  .smaller3 {
    font-size: 1.5rem;
  }
  .smaller4 {
    font-size: 1.8rem;
  }
  .smaller5 {
    font-size: 2rem;
  }
  .styles {
    line-height: 1.2;
    margin-bottom: 0.3rem;
  }
  .city-district {
    line-height: 1.2;
    margin-top: 0.3rem;
  }
`

const Card = ({
  name,
  name_alt,
  styles,
  city,
  district,
  image,
  isQueer,
  allData,
}) => {
  const fluid = image && image.localFiles[0].childImageSharp.fluid

  setTimeout(() => {
    // Resize names according to their length, to fit in the card
    const allNames = Array.from(document.querySelectorAll('.resize'))
    const oneCard = document.querySelector('.card')
    const cardMaxWidth = parseInt(getComputedStyle(oneCard).width) - 12
    resizeNames(allNames, cardMaxWidth)
  }, 200)

  return (
    <Main
      className={`card ${isQueer ? 'queer' : ''} `}
      tabIndex="0"
      aria-label={name}
    >
      <ImgBand className="card__photo">
        {fluid ? (
          <Image
            fluid={fluid}
            className="card__img"
            alt={name}
            title={name_alt}
          />
        ) : (
          <img
            src={placeholder}
            className="card__img"
            alt={name}
            title={name_alt}
          />
        )}
      </ImgBand>
      <InfosBand className="card__infos">
        <h2 className="resize">{name}</h2>
        <p className="styles">
          <span aria-hidden="true">🎹 </span>
          <span className="card__styles">
            {styles.length > 1 ? styles.join(', ') : styles}
            {allData.other_style && ', ' + allData.other_style}
          </span>
        </p>
        <p className="city-district">
          <span aria-hidden="true">🔳 </span>
          {city}, {district}
        </p>
      </InfosBand>
      <CardLinks links={allData} />
    </Main>
  )
}

export default Card
