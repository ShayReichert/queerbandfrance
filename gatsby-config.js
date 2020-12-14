module.exports = {
  siteMetadata: {
    title: `QueerBand - France`,
    shortTitle: `QueerBand`,
    description: `Groupes queers et féministes de France, par régions et par styles.`,
    author: `@ShayReichert`,
    siteUrl: 'https://queerbandfrance.com/',
    image: '/images/share.jpg',
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
          omitKeys: ['xmlnsSerif'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QueerBand - France`,
        short_name: `QueerBand`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/queerband-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
