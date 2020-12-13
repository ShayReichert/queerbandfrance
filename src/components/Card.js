import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import { SiBandcamp, SiInstagram } from 'react-icons/si'

import placeholder from '../images/placeholder-img.jpg'

const Main = styled.div`
  background: rgba(241, 241, 241, 0.05);
  height: 32rem;
  width: 23rem;
  margin: 0.5rem;
  border-radius: 0.8rem;
  cursor: default;
`
const ImgBand = styled.div`
  height: 45%;
  width: 100%;
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
  padding: 1.5rem;
  font-family: 'Roboto', Helvetica, sans-serif;

  h2 {
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 2.6rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 1.3rem;
    letter-spacing: 0.2px;
    line-height: 1.8;
  }
`
const BtnBand = styled.div`
  margin: auto;
  margin-top: 1rem;
  width: 13rem;
  display: flex;
  justify-content: space-between;
  button {
    font-size: 1.7rem;
    border-radius: 30px;
    border: none;
    height: 3.2rem;
    width: 3.3rem;
    background: #383838;
    color: var(--main-text);
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    svg {
      vertical-align: middle;
      text-align: center;
    }
  }
`

const Card = ({ name }) => (
  <Main>
    <ImgBand className="card__photo">
      <img src={placeholder} alt="placeholder" />
    </ImgBand>
    <InfosBand>
      <h2>{name}</h2>
      <p>
        <span role="img" aria-label="piano">
          🎹{' '}
        </span>
        Punk, Riot
      </p>
      <p>
        <span role="img" aria-label="black square">
          🔳{' '}
        </span>
        Bordeaux, Nouvelle-Aquitaine
      </p>
    </InfosBand>
    <BtnBand>
      <button>
        <SiBandcamp />
      </button>
      <button>
        <FaFacebookF />
      </button>
      <button>
        <SiInstagram />
      </button>
    </BtnBand>
  </Main>
)

export default Card
