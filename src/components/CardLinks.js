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
  const { bandcamp, facebook, instagram, url, youtube, name } = links

  return (
    <BtnBand className="social-btn-box">
      {bandcamp && (
        <>
          <a
            href={bandcamp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bandcamp de ${name}`}
          >
            <button style={{ '--i': '1' }} aria-label={`Bandcamp de ${name}`}>
              <SiBandcamp aria-label="Bandcamp" role="presentation" />
            </button>
          </a>
        </>
      )}
      {facebook && (
        <>
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Facebook de ${name}`}
          >
            <button style={{ '--i': '2' }} aria-label={`Facebook de ${name}`}>
              <FaFacebookF aria-label="Facebook" role="presentation" />
            </button>
          </a>
        </>
      )}
      {instagram && (
        <>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${name}`}
          >
            <button style={{ '--i': '3' }} aria-label={`Instagram de ${name}`}>
              <SiInstagram aria-label="Instagram" role="presentation" />
            </button>
          </a>
        </>
      )}
      {youtube && (
        <>
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Youtube de ${name}`}
          >
            <button style={{ '--i': '4' }} aria-label={`Youtube de ${name}`}>
              <SiYoutube aria-label="Youtube" role="presentation" />
            </button>
          </a>
        </>
      )}
      {url && (
        <>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Site de ${name}`}
          >
            <button style={{ '--i': '5' }} aria-label={`Site de ${name}`}>
              <FiLink aria-label="Site" role="presentation" />
            </button>
          </a>
        </>
      )}
    </BtnBand>
  )
}

export default CardLinks
