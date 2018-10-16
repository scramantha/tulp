module.exports = {
  modules: [
    ['nuxt-i18n', {
      strategy: 'prefix_except_default',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English'
        }, {
          code: 'nl',
          iso: 'nl-NL',
          name: 'Nederlands'
        }],
      defaultLocale: 'nl',
      seo: true,
      vueI18n: {
        fallbackLocale: 'nl',
        messages: {
          en: {
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
              "introduction": "See what Reijns-IP can do to help your growing and innovative business."
            },
            "about": {
              "title": "About",
              "introduction": "This page is made to give you more information.",
            },
            "services": {
              "title": "Services"
            },
            "bio": {
              "title": "Bio"
            },
          },
          nl: {
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
              "title": "Welcom",
              "introduction": "Zie wat Reijns-IP kunt voor jou werk doen."
            },
            "about": {
              "title": "Over",
              "introduction": "Dit paginga is de 'Over' pagina, met meer informatie!",
              "amsterdam": "Reijns IP is een Amsterdams niche kantoor, gespecialiseerd in consulting en juridische dienstverlening op het gebied van IP. Denk bijvoorbeeld aan het begeleiden en vormgeven van samenwerkingen voor nieuwe producten of exploitatie van uitvindingen, maar ook aan het in goede banen leiden van conflicten en minimaliseren van hun impact.",
              "relationships": "Reijns IP ondersteunt creatieve en innovatieve bedrijven, zodat zij zich kunnen richten op wat zij het beste doen. Hier is juridisch consulting geen showstopper, maar juist een steun waar cliënten dat nodig hebben. Goede afspraken leiden tot sterke relaties en daarbij kan Reijns IP helpen.",
              "agreements": "En mocht er ergens een conflict ontstaan, dan moet dat niet de bedrijfsvoering of verdere ontwikkeling blokkeren. Samen bepalen wij dan de juiste strategie zodat u snel weer door kunt met wat voor u belangrijk is."
            },
            "services": {
              "title": "Services Dutch"
            },
            "bio": {
              "title": "Bio",
              "introduction": "Reijns-IP is Arjan Reijns."
            }
          }
        }
      },
      beforeLanguageSwitch: (oldOne, newOne) => {
        // console.log('BEFORE LANG SWITCH: ' + oldOne + ' -> ' + newOne);
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
      { rel: 'stylesheet', href: '/main.css' },      
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,600,700|Lato:400,700,900' }
    ],
    script: [
      // This is my own fontawesome CDN code.
      { src: 'https://use.fontawesome.com/8e3ba72382.js' },
      //bootstrap
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' }
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
