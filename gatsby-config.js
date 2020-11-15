/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require('dotenv').config({path:'.env'})

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: 'gatsby-plugin-snipcartv3',
    options: {
      apiKey: 'ZTFjZDFiNDMtNWQ2Mi00MGVhLTkxMjQtYzMxY2U2ZTE2MWQ0NjM3NDEwNDM2ODE2ODY5Njgx'
    }
  }],
}
