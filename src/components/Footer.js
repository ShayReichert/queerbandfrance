import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaFacebookF } from 'react-icons/fa'
import { SiYoutube, SiInstagram } from 'react-icons/si'

const FooterNav = styled.nav`
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
  width: 20rem;
  margin-top: 2rem;
`
const Footer = ({ title }) => {
  return (
    <footer>
      <FooterNav className="footer-parts">
        <ul>
          <li>
            <Link to="/proposer-groupe">Proposer un groupe</Link>
          </li>
          <li>
            <Link to="/conditions-generales">Conditions générales</Link>
          </li>
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <a href="mailto:shay.reichert@outlook.fr">Contact</a>
          </li>
        </ul>
      </FooterNav>
      <FooterCopyright className="footer-parts">
        <p>
          {' '}
          © {new Date().getFullYear()} {title}
        </p>
        <p>
          Designed & Created with{' '}
          <span role="img" aria-hidden="true">
            💙
          </span>{' '}
          by <a href="mailto:shay.reichert@outlook.fr">Shay Reichert</a>
        </p>
        <BtnFooter className="social-btn-box">
          <a
            href="https://www.youtube.com/channel/UCTu84B1flb--aF4jzfeh-eQ"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Chaîne youtube de l'association"
          >
            <button aria-label="Youtube">
              <SiYoutube aria-label="Youtube" />
            </button>
          </a>
          <a
            href="https://www.facebook.com/THISISARIOT"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook de l'association"
          >
            <button aria-label="Facebook">
              <FaFacebookF aria-label="Facebook" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/this_is_a_riot/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram de l'association"
          >
            <button aria-label="Instagram">
              <SiInstagram aria-label="Instagram" />
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
            aria-label="Facebook de l'association"
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
