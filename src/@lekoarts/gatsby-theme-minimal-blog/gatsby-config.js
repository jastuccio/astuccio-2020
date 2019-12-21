const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = options => {
  const showLineNumbers = options.showLineNumbers || true

  return {
    siteMetadata: {
      siteTitle: `Joe Astuccio`,
      siteTitleAlt: `Joe Astuccio | Web Developer`,
      siteHeadline: `Joe Astuccio | Web Developer`,
      siteUrl: `https://astucc.io`,
      siteDescription: `My programming and personal blog.  Code examples for HTML, CSS, JavaScript, React, Gatsby, FISH shell, and more.  Feel free to ignore the thoughts, recipes, pictures etc if you're just here for the sweet code.` ,
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
      ],
      showLineNumbers,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ],
  }
}
