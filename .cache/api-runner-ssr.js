var plugins = [{
      plugin: require('/Users/jakeman/jake-dev/jakeschroeder.me/node_modules/gatsby-plugin-webfonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":{"google":[{"family":"Rubik","variants":["400","500"]},{"family":"IBM Plex Sans","variants":["500","700"]}]}},
    },{
      plugin: require('/Users/jakeman/jake-dev/jakeschroeder.me/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jakeman/jake-dev/jakeschroeder.me/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jakeman/jake-dev/jakeschroeder.me/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jakeman/jake-dev/jakeschroeder.me/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"jakeschroeder.me","short_name":"starter","start_url":"/","background_color":"#1C98FF","theme_color":"#1C98FF","display":"minimal-ui","icon":"src/images/j-icon.png"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
