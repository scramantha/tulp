module.exports = {
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US'
        }, {
          code: 'nl',
          iso: 'nl-NL'
        }],
      defaultLocale: 'nl',
      seo: true,
      vueI18n: {
        fallbackLocale: 'nl',
        messages: {
          en: 
            {
              "links": {
                "home": "Home",
                "about": "About",
                "services": "Services",
                "bio": "Bio",
                "info": "Info",
                "english": "English",
                "dutch": "Nederlands"
              },
              "home": {
                "title": "Welcome",
                "introduction": "This is an introduction in English."
              },
              "about": {
                "title": "About",
                "introduction": "This page is made to give you more information."
              
            }
          },
          nl:{
            "links": {
              "home": "Thuis",
              "about": "Over",
              "services": "ServicesNL",
              "bio": "BioNL",
              "info": "InfoNL",
              "english": "English",
              "dutch": "Nederlands"
            },
            "home": {
              "title": "Welcom"
            },
            "about": {
              "title": "Over",
              "introduction": "Dit paginga is de 'Over' pagina, met meer informatie!"
            },
            "services": {
              "title": "Services Dutch"
            }
          }
        }
      }
    }]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/styles.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond|Karla|Lato:900|Spectral+SC|Zilla+Slab' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather' }
    ],
    script: [
      // This is my own fontawesome CDN code.
      { src: 'https://use.fontawesome.com/8e3ba72382.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: ['/', '/about', '/en', '/en/about']
  }
}
