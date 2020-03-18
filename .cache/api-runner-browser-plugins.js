module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"jakeschroeder.me","short_name":"starter","start_url":"/","background_color":"#1C98FF","theme_color":"#1C98FF","display":"minimal-ui","icon":"src/images/j-icon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
