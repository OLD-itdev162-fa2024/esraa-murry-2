require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  
  module.exports = {
    siteMetadata: {
      title: 'Gatsby Blog',
      description: 'ITDEV-164 Gatsby Blog.',
      author: 'Esraa Murry',
      siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
      contact: {
        name: 'Esraa Murry',
        company: 'Saroo2a Cafe',
        address: '9572 west prairie grass way',
      },
    },
    plugins: [
      'gatsby-plugin-image',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.SPACE_ID,
          accessToken: process.env.ACCESS_TOKEN,
        }
      },
      'gatsby-transformer-remark',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
    ],
  };
  