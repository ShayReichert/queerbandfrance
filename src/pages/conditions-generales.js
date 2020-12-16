import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Conditions = () => (
  <Layout>
    <SEO title="Conditions Générales" />
    <div className="mentions-conditions">
      <h1>Conditions Générales</h1>
      <section>
        <h2>
          QueerBandFrance a pour but de visibiliser les projets de personnes
          queers et/ou féministes en France.
        </h2>
        <p>
          Si tu veux proposer ton projet, envoie-nous les infos suivantes via le
          lien{' '}
          <a href="mailto:thisisariot.asso@gmail.com">
            Soumettre une suggestion de groupe
          </a>{' '}
          :
        </p>
        <ul>
          <li>le nom de ton projet ;</li>
          <li>
            ta région et ta ville (si c'est une petite ville, la grosse ville la
            plus près de chez toi) ;
          </li>
          <li>
            le style musical du projet (2 maximum, dont 1 assez large pour
            faciliter le référencement) ;
          </li>
          <li>
            des liens vers ta musique et tes réseaux sociaux (bandcamp,
            facebook, instagram, youtube...) ;
          </li>
          <li>
            Ta catégorie : queer ou féministe ? <br />
            <em>
              Si tu es queer ET féministe, choisis la catégorie queer qui
              regroupe par défaut les deux catégories. La catégorie féministe
              s'applique aux projets menés par des personnes cis hétéras
              féministes.
            </em>
          </li>
        </ul>
        <p>
          <em>
            L'équipe de This is a riot ne prétend pas déterminer quels projets
            sont « légitimes » ou non ; néanmoins, le but est de laisser la
            place aux personnes peu visibilisées sur la scène musicale
            française. Nous ne référencerons pas les groupes composés en
            majorités d'hommes cis hétéros, les projets comprenant des propos
            transphobes, racistes ou x-phobes, ainsi que les projets comprenant
            de l'appropriation culturelle.
          </em>
        </p>

        <h2>Queers & Grrrls to the front !</h2>
      </section>
    </div>
  </Layout>
)

export default Conditions
