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

  return (
    <Layout>
      <SEO title="Home" />
      <MainGrids bands={bands} styles={styles} allDistricts={allDistricts} />
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
