import React from 'react'
import { Link } from 'gatsby'
import CookieConsent from 'react-cookie-consent'

const Cookie = () => {
  return (
    <CookieConsent
      debug={true}
      disableStyles={true}
      containerClasses="cookie-container"
      contentClasses="cookie-content"
      buttonClasses="cookie-btn"
      buttonText="J'ai compris !"
    >
      <span role="img" aria-label="cookie">
        🍪{' '}
      </span>
      Ce site Web utilise des cookies pour améliorer l'expérience
      utilisateur.&nbsp;&nbsp;
      <Link to="/mentions-legales/#cookies">
        <span style={{ fontSize: '10px' }}>
          Voir mentions légales relatives aux cookies
        </span>
      </Link>
    </CookieConsent>
  )
}

export default Cookie
