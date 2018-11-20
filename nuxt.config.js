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
              "contact": "Contact",

              "english": "English",
              "dutch": "Nederlands"
            },
            "home": {
              "title": "Welcome",
              "introduction": "See what Reijns-IP can do to help your growing and innovative business."
            },
            "about": {
              "title": "Over",
              "introduction": "Dit paginga is de 'Over' pagina, met meer informatie!",
              "amsterdam": "Reijns IP is an Amsterdam boutique firm, specialised in IP-consulting and -legal services. For example: setting up and providing counsel in joint product developments and licensing processes. Other examples would be providing support in cooperation agreements for monetizing inventions or minimising conflicts and/or their impact.",
              "relationships": "Reijns IP supports creative and innovative companies so they can focus on what they do best. Here, legal consulting is not a show stopper, it is enabling support where needed. Solid agreements lead to strong relationships. And if a conflict does arise, it should not stop business as usual or hold up development. Together we will determine the appropriate strategy so you can get back to what you care about.",
              "agreements": "Reijns IP supports creative and innovative companies so they can focus on what they do best. Here, legal consulting is not a show stopper, it is enabling support where needed. Solid agreements lead to strong relationships. And if a conflict does arise, it should not stop business as usual or hold up development. Together we will determine the appropriate strategy so you can get back to what you care about."
            },
            "services": {
              "title": "Services",
              "introduction": "The aspects of IP are many and varied. Every company relies and builds on its technology, trademarks and/or reputation. Trying to distinguish oneself and market demarcation are standard on the marketplace and a claim from a competitor does not have to mean real trouble. What is important, is someone with a good attention to detail and who enjoys digging through complexity and finding a creative solution.",
              "one": {
                "name": "Start-ups",
                "description": "The early stages of a company are often uncertain and vulnerable. This only amplifies the need for a partner who not only knows whether or not a product – be it physical or digital – can be protected and how, but who also understands the manufacturing process and value chain; who has experience in getting to term sheets and R&amp;D cooperations."
              },
              "two": {
                "name": "(Bio) Tech",
                "description": "Innovative (bio) tech draws a lot of attention and incumbents are always keeping an eye out for new market entries and possible distruptions. A counsel who can draw up solid agreements with regard to know how and has experience with how incumbents try to corner new entrants can you save a lot of problems and expenses in the long run."
              },
              "three": {
                "name": "Assistance",
                "description": "Of course there are a thousand and one reasons for seeking legal advice. Justsend me an e-mail and if I don’t have the answers myself, I’m sure that I know someone who does and can help you along. Introductory meetings are always free."
              }
            },
            "bio": {
              "title": "Bio"
            },
          },
          nl: {
            "links": {
              "home": "Thuis",
              "about": "Over",
              "services": "Diensten",
              "bio": "Bio",
              "info": "Info",
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
              "title": "Diensten",
              "introduction": "IP heeft vele kanten en ieder bedrijf vertrouwt en bouwt voor een groot deel op zijn technologie, merken en/of handelsnaam. Afbakening is normaal en een brief van een concurrent die je wil aanspreken is echt niet altijd een probleem. Belangrijk is een goed oog voor de detail en iemand die het leuk vindt om in de complexiteit te duiken en samen creatieve oplossingen te verzinnen.",
              "one": {
                "name": "Start-ups",
                "description": "De beginfase van een bedrijf is kwetsbaar. Daarom is het belangrijk om een partner te hebben die niet alleen weet of en hoe een product beschermd kan worden, maar die ook begrijpt hoe de productieketen in elkaar zit en (o.a. R&D-) samenwerkingen heeft opgezet."
              },
              "two": {
                "name": "(Bio) Tech",
                "description": "Innovatieve (bio)tech staat vol in de schijnwerpers en de gevestigde spelers houden nieuwe toetreders goed in de gaten. Een advocaat die de afspraken rond know-how kan dichttimmeren en heeft gezien hoe grote partijen toetreders proberen klem te zetten kan op de lange termijn veel geld en problemen besparen."
              },
              "three": {
                "name": "Losse vragen",
                "description": "Natuurlijk zijn er duizend en één redenen om juridisch advies in te winnen. Stuur gewoon een mailtje en als ik het niet weet, kan ik je vast de juiste richting wijzen. Oriënterende gesprekken zijn altijd gratis."
              }
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
