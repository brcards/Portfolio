module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-root-import`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `resources`,
                path: `${__dirname}/src/resources/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bryan Carder Portfolio`,
                short_name: `Portfolio`,
                start_url: `/`,
                display: `standalone`,
                icon: `src/resources/images/favicon.png`, // This path is relative to the root of the site.
            },
        }
    ],
    siteMetadata: {
        title: 'Bryan Carder',
    },
};
