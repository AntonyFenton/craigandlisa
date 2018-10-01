module.exports = {
  siteMetadata: {
    title: 'Craig and Lisa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'craigandlisa',
        accessToken:
          'MC5XMHl6MlNVQUFDUUFCSkNy.77-9WRsu77-9JURA77-977-977-977-977-9DFPvv71M77-9YlVj77-977-977-977-977-9Pl3vv73vv70677-9',
      },
    },
    'gatsby-plugin-offline',
  ],
}
