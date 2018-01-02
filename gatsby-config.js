module.exports = {
  pathPrefix: '/cuba-site',
  siteMetadata: {
    title: 'Cuba Bar - Golohovaya 28',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
  ],
}
