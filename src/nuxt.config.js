module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'src',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/',
    vendors: [],
    extractCSS: true,
    babel: {
      presets: [
        'es2015',
        'stage-0',
      ],
      plugins: ["transform-runtime", {
        // "helpers": false,
        // "polyfill": true,
        // "regenerator": true,
        // "moduleName": "babel-runtime"
      }],
  },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
