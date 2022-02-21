import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Conditions = () => (
  <Layout>
    <SEO title="Conditions Générales" />
    <div className="mentions-conditions">
      <h1>Conditions Générales</h1>
      <section>
        <h2>
          QueerBandFrance a pour but de visibiliser des groupes de musique
          queers et/ou féministes* francophone.
        </h2>
        <p>
          Si tu veux proposer ton projet, remplis{' '}
          <Link to="/proposer-groupe">ce formulaire</Link>. Il faudra que tu
          renseignes :
        </p>
        <ol>
          <li>Le nom de ton projet ;</li>
          <li>
            Un lien vers une image du groupe (ça peut être une photo de profil
            bandcamp, facebook...) ;
          </li>
          <li>
            Préciser si c'est un groupe queer ;<br />
            <em>
              si tu coches "non", le groupe sera considéré comme féministe mais
              pas queer. Les groupes queers et féministes apparaissent en rose
              sur le site, les groupes féministes en bleu.
            </em>
          </li>
          <li>Le / les styles musical du projet ;</li>
          <li>
            Ta région et ta ville (si c'est une petite ville, la grosse ville la
            plus près de chez toi) ;
          </li>
          <li>
            Si tu le souhaites, des liens vers ta musique et tes réseaux sociaux
            (bandcamp, facebook, instagram, youtube...) ;
          </li>
          <li>
            Ton mail pour qu'on puisse te contacter s'il nous manque des infos.
          </li>
        </ol>
        <p>
          <em>
            * L'équipe de This is a riot ne prétend pas déterminer quels projets
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
