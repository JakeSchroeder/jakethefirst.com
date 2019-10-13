module.exports = {
  siteMetadata: {
    title: `Jake Schroeder | UX Designer and Frontend Developer`,
    description: `Jake Schroeder is a designer and developer based in Chicago, IL. He builds react apps for the web and mobile devices.`,
    author: `@jakeman`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Rubik",
              variants: ["400", "500"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
            {
              family: "IBM Plex Sans",
              variants: ["500", "700"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            }
          ],
        },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      },
    },
    `gatsby-plugin-styled-components`,
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
        name: `jakeschroeder.me`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1C98FF`,
        theme_color: `#1C98FF`,
        display: `minimal-ui`,
        icon: `src/images/j-icon.png`,
      },
    }
   

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
