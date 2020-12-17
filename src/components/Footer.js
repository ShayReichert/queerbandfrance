import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FaFacebookF } from 'react-icons/fa'
import { SiYoutube, SiInstagram } from 'react-icons/si'

const FooterLinks = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-left: 8rem;
    text-align: left;
  }
`
const FooterCopyright = styled.div`
  text-align: center;
  p:nth-of-type(1) {
    text-transform: uppercase;
    font-size: 1.4rem;
  }
`
const FooterAsso = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 40rem;
  }

  p {
    padding: 0 8rem;
  }
`

const BtnFooter = styled.div`
  margin-top: 2rem;
`
const Footer = ({ title }) => {
  return (
    <footer>
      <FooterLinks className="footer-parts">
        <a href="mailto:thisisariot.asso@gmail.com">
          Soumettre une suggestion de groupe
        </a>
        <br />
        <Link to="/conditions-generales">Conditions générales</Link>
        <br />
        <Link to="/mentions-legales">Mentions légales</Link>
        <br />
        <a href="mailto:shay.reichert@outlook.fr">Contact</a>
      </FooterLinks>

      <FooterCopyright className="footer-parts">
        <p>
          {' '}
          © {new Date().getFullYear()} {title}
        </p>
        <p>
          Designed & Created with{' '}
          <span role="img" aria-label="blue heart">
            💙
          </span>{' '}
          by <a href="mailto:shay.reichert@outlook.fr">Shay Reichert</a>
        </p>

        <BtnFooter className="social-btn-box">
          <a
            href="https://www.youtube.com/channel/UCTu84B1flb--aF4jzfeh-eQ"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button aria-label="Bandcamp">
              <SiYoutube />
            </button>
          </a>

          <a
            href="https://www.facebook.com/THISISARIOT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button aria-label="Facebook">
              <FaFacebookF />
            </button>
          </a>

          <a
            href="https://www.instagram.com/this_is_a_riot/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button aria-label="Instagram">
              <SiInstagram />
            </button>
          </a>
        </BtnFooter>
      </FooterCopyright>

      <FooterAsso className="footer-parts">
        <p>
          L’association{' '}
          <a
            href="https://www.facebook.com/THISISARIOT"
            target="_blank"
            rel="noreferrer noopener"
          >
            THIS IS A RIOT
          </a>{' '}
          soutient le développement de cette application.
        </p>
      </FooterAsso>
    </footer>
  )
}

export default Footer
