import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const Title = styled.h1`
  font-family: 'Righteous', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    opacity: 0.8;
    text-decoration: none;
  }
  span {
    font-family: 'Archivo', sans-serif;
    font-size: 14px;
    font-weight: 200;
    color: #fff;
    opacity: 0.8;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <Title>
      <Link to="/">{siteTitle}</Link>
      <span>France</span>
    </Title>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
