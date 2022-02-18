import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer.js'

const Layout = ({ children, removeAllActive }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          shortTitle
        }
      }
    }
  `)

  return (
    <>
      <Header
        shortTitle={data.site.siteMetadata?.shortTitle || `QueerBand`}
        removeAllActive={removeAllActive}
      />
      <main>{children}</main>
      <Footer title={data.site.siteMetadata?.title || `QueerBand - France`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
