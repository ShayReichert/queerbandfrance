import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { IoMenu } from 'react-icons/io5'

const MainTitle = styled.div`
  #burger {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 4.5rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

const MainSearch = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    margin-right: 12rem;
    margin-top: 0;
  }
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

const Header = ({ shortTitle, removeActiveStyle }) => {
  const filteredBands = (e) => {
    e.preventDefault()
    const bands = Array.from(document.querySelectorAll('.card'))
    const search = e.target.value.toLowerCase()

    removeActiveStyle()

    bands.map((band) => {
      let contentValue = band.textContent || band.innerText

      if (contentValue.toLowerCase().indexOf(search) > -1) {
        return (band.style.display = '')
      } else {
        return (band.style.display = 'none')
      }
    })
  }

  return (
    <header>
      <MainTitle>
        <Title>
          <Link to="/">{shortTitle}</Link>
          <span>France</span>
        </Title>
        <IoMenu id="burger" />
      </MainTitle>

      <MainSearch>
        <BsSearch className="icon" />
        <SearchInput onChange={filteredBands} />
      </MainSearch>
    </header>
  )
}

Header.propTypes = {
  shortTitle: PropTypes.string,
}

Header.defaultProps = {
  shortTitle: ``,
}

export default Header
