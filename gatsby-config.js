module.exports = {
  siteMetadata: {
    title: `Happy Tour!`,
    description: `WonderFul Vacation!`,
    author: `@zhi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icon: `src/images/z.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // url: `http://cakeit.local/graphql`,
        url: `https://zhi-demo.9purple.com/graphql`,
        schema: {
          timeout: 200000,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Teko\:200, 400, 500, 600, 700`],
        display: `swap`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
