import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MainGrids from '../components/MainGrid'

const IndexPage = ({ data }) => {
  const {
    allAirtable: { nodes: bands },
    allAirtable: { allStyles },
    allAirtable: { allDistricts },
  } = data
  const styles = Array.from(allStyles.map((style) => style.fieldValue))

  // Clean all styles and districts checked on search into the search bar
  let checkedStyles = []
  let checkedDistricts = []

  const removeActiveStyle = () => {
    const styles = Array.from(document.querySelectorAll('.band-style'))
    const districts = Array.from(
      document.querySelectorAll('[data-name] > path')
    )

    styles.map((style) => {
      return style.classList.remove('active')
    })
    checkedStyles.splice(0, checkedStyles.length)
    districts.map((district) => {
      return district.classList.remove('active')
    })
    checkedDistricts.splice(0, checkedDistricts.length)
  }

  return (
    <Layout removeActiveStyle={removeActiveStyle}>
      <SEO title="Home" />
      <MainGrids
        bands={bands}
        styles={styles}
        allDistricts={allDistricts}
        checkedDistricts={checkedDistricts}
        checkedStyles={checkedStyles}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Bands" } }
      sort: { order: ASC, fields: data___name }
    ) {
      nodes {
        id
        data {
          name
          name_alt
          style
          other_style
          district
          city
          isQueer
          bandcamp
          facebook
          instagram
          url
          youtube
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allStyles: group(field: data___style) {
        fieldValue
      }
      allDistricts: group(field: data___district) {
        fieldValue
        totalCount
      }
    }
  }
`
export default IndexPage
