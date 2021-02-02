import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AddBandForm from '../components/AddBand'

const Proposer = ({ data }) => {
  const {
    allAirtable: { allStyles },
    allAirtable: { allDistricts },
    allAirtable: { allCities },
  } = data

  // Transform datas into clean arrays
  const styles = Array.from(allStyles.map((style) => style.fieldValue))
  const districts = Array.from(
    allDistricts.map((district) => district.fieldValue)
  )
  const cities = Array.from(allCities.map((city) => city.fieldValue))

  return (
    <Layout>
      <SEO title="Proposer un groupe" />
      <AddBandForm styles={styles} districts={districts} cities={cities} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Bands" } }) {
      allStyles: group(field: data___style) {
        fieldValue
      }
      allDistricts: group(field: data___district) {
        fieldValue
      }
      allCities: group(field: data___city) {
        fieldValue
      }
    }
  }
`

export default Proposer
