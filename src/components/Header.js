import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const MainTitle = styled.div`
  display: flex;
  align-items: center;
`
const MainSearch = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12rem;
`
const SearchInput = styled.input`
  border-radius: 3rem;
  border: none;
  background: var(--main-text);
  margin-left: 1rem;
  width: 15.2rem;
  height: 2.6rem;
  padding: 0 1rem;
`
const Title = styled.h1`
  position: relative;
  margin-bottom: 1rem;
  font-family: 'Righteous', sans-serif;
  font-weight: 400;

  a {
    text-decoration: none;
  }
  span {
    position: absolute;
    top: 3rem;
    right: 0.8rem;
    font-family: 'Archivo', sans-serif;
    font-size: 1.2rem;
  }
`

const Header = ({ shortTitle }) => (
  <header>
    <MainTitle>
      <Title>
        <Link to="/">{shortTitle}</Link>
        <span>France</span>
      </Title>
    </MainTitle>

    <MainSearch>
      <BsSearch className="icon" />
      <SearchInput />
    </MainSearch>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
