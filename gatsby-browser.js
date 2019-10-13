/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 


 exports.onClientEntry = () => {
      // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
      if (typeof window.IntersectionObserver === `undefined`) {
        import(`intersection-observer`)
        console.log(`# IntersectionObserver is polyfilled!`)
      }
};

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // const currentPosition = getSavedScrollPosition(location)

  document.getElementById("main-content").scrollTo(0, 0);

  return true;
};
