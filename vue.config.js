module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueresumedeploy/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/globalVars.scss";`
      }
    }
  }
}
