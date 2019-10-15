module.exports = {
  siteMetadata: {
    title: `Jake Schroeder | UX Designer and Frontend Developer`,
    description: `Jake Schroeder is a designer and developer based in Chicago, IL. He builds react apps for the web and mobile devices.`,
    author: `jake.schroeder@isophex.com`,
  },
  plugins: [
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     // prettier-ignore
    //     plugins: [
    //       `gatsby-remark-autolink-headers`,
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           noInlineHighlight: true,
    //         },
    //       },
    //     ]
    //   },
    // },
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
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
