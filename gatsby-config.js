require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Joe Astuccio`,
    siteTitleAlt: `Joe Astuccio | Web Developer`,
    siteHeadline: `Joe Astuccio | Web Developer`,
    siteUrl: `https://astucc.io`,
    siteDescription: `My programming and personal blog.  Code examples for HTML, CSS, JavaScript, React, Gatsby, FISH shell, and more.  Feel free to ignore the thoughts, recipes, pictures etc if you're just here for the sweet code.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@jastuccio`,
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/jastuccio`,
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/joseph-astuccio-3aa80512/`,
      },
      {
        name: `Resume`,
        url: `https://docs.google.com/document/d/1Y1xw7ParXJQAPdFHum4dn-47PPkRqNUMYhoiOAbtpmk/edit?usp=sharing`,
      },
    ],
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,

        // This folder will be created if it doesn’t exist.
        uploadFolder: 'astuccio-2020-blog',
      },
    },
  ],
}