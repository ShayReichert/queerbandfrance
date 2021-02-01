import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AddBandForm from '../components/AddBand'

const Proposer = ({ data }) => (
  <Layout>
    <SEO title="Proposer un groupe" />
    <AddBandForm />
  </Layout>
)

export default Proposer
