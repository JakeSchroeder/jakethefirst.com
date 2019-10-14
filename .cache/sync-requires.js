const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jake/dev/jakeschroeder.me/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jake/dev/jakeschroeder.me/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/jake/dev/jakeschroeder.me/src/pages/contact.js"))),
  "component---src-pages-education-js": hot(preferDefault(require("/Users/jake/dev/jakeschroeder.me/src/pages/education.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jake/dev/jakeschroeder.me/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/jake/dev/jakeschroeder.me/src/pages/projects.js")))
}

