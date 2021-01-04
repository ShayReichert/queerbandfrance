import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import { SiBandcamp, SiInstagram, SiYoutube } from 'react-icons/si'
import { FiLink } from 'react-icons/fi'

const BtnBand = styled.div`
  button {
    transform: translateY(80px);
    opacity: 0;
    transition: 0.3s;
    transition-delay: calc(0.1s * var(--i));
  }
`

const CardLinks = ({ links }) => {
  const { bandcamp, facebook, instagram, url, youtube } = links

  return (
    <BtnBand className="social-btn-box">
      {bandcamp && (
        <>
          <a href={bandcamp} target="_blank" rel="noopener noreferrer">
            <button style={{ '--i': '1' }} aria-label="Bandcamp du groupe">
              <SiBandcamp />
            </button>
          </a>
        </>
      )}
      {facebook && (
        <>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <button style={{ '--i': '2' }} aria-label="Facebook du groupe">
              <FaFacebookF />
            </button>
          </a>
        </>
      )}
      {instagram && (
        <>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <button style={{ '--i': '3' }} aria-label="Instagram gu groupe">
              <SiInstagram />
            </button>
          </a>
        </>
      )}
      {youtube && (
        <>
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <button style={{ '--i': '4' }} aria-label="Youtube gu groupe">
              <SiYoutube />
            </button>
          </a>
        </>
      )}
      {url && (
        <>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button style={{ '--i': '5' }} aria-label="Youtube gu groupe">
              <FiLink />
            </button>
          </a>
        </>
      )}
    </BtnBand>
  )
}

export default CardLinks
