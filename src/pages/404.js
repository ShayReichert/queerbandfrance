import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const Main404 = styled.div`
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1,
  p {
    text-align: center;
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4.3rem;
    }
    p {
      font-size: 1.7rem;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 : Page non trouvée !" />
    <Main404>
      <h1>Ooops, il n'y a rien ici !</h1>
      <p>
        Tu peux <Link to="/">revenir à l'accueil</Link> par exemple ou bien te
        mettre en position foetale.
      </p>
    </Main404>
  </Layout>
)

export default NotFoundPage
