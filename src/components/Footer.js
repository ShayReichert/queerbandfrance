import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FaFacebookF } from 'react-icons/fa'
import { SiBandcamp, SiInstagram } from 'react-icons/si'

const FooterLinks = styled.div`
  border: 1px solid transparent;
  padding-left: 8rem;
`
const FooterCopyright = styled.div`
  border: 1px solid transparent;
  text-align: center;
  p:nth-of-type(1) {
    text-transform: uppercase;
    font-size: 1.4rem;
  }
`
const FooterAsso = styled.div`
  border: 1px solid transparent;
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
          Designed & Created with 💙 by{' '}
          <a href="mailto:shay.reichert@outlook.fr">Shay Reichert</a>
        </p>
        <BtnFooter className="social-btn-box">
          <button aria-label="Bandcamp">
            <SiBandcamp />
          </button>
          <button aria-label="Facebook">
            <FaFacebookF />
          </button>
          <button aria-label="Instagram">
            <SiInstagram />
          </button>
        </BtnFooter>
      </FooterCopyright>

      <FooterAsso className="footer-parts">
        <p>
          L’association{' '}
          <a
            href="https://www.facebook.com/THISISARIOT"
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
