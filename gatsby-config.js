// require(`dotenv`).config({
//   path: `.env`,
// })

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Joe Astuccio - Front End Developer`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `Now`,
        slug: `/now`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joe Astuccio - @jastuccio`,
        short_name: `Joe Astuccio`,
        description: `My coding and personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        // icons: [
        //   {
        //     src: `/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
