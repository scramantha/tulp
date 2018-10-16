<template>
  <div class="">
    <div class="container">
      <div class="responsive-padding-x text-center">
        <HeadingX :level="1">{{ $t('contact.title') }}</HeadingX>
      </div>
      <div class="row py-4">
        <div class="col-16 col-md-12 offset-md-2 col-lg-8 offset-lg-4">
          <div class="box white-bg p-3">
          <HeadingX :level="3">Contact</HeadingX>

            <table>
            <tr>
              <td style="width: 130px">e-mail</td>
              <td>
                <a href="mailto:arjan.reijns@reijns-ip.com" target="_top" class="aamrLink">
                  arjan.reijns @ reijns-ip.com</a>
              </td>
            </tr>
            <tr>
              <td>tel</td>
              <td>+31 (6) 184 333 13</td>
            </tr>
            <tr>
              <td>kantooradres</td>
              <td>Noorderstraat 23-III</td>
            </tr>
            <tr>
              <td></td>
              <td>1017 TR&nbsp;&nbsp;Amsterdam</td>
            </tr>
          </table>
          </div>
        </div>
      </div>
      <div class="row mb-4">   
        <div class="col-16 col-md-12 offset-md-2 col-lg-8 offset-lg-4">
          <div class="box white-bg p-3">
          <HeadingX :level="3">Transparatie</HeadingX>
          <p>
            De algemene voorwaarden van Reijns IP vind je
            <a href="content/links/alg-vw-20170317.pdf" target="_blank" class="aamrLink">hier</a>.
          </p>
          <p>
            De tariefregeling vind je
            <a href="content/links/Tarieven-2017.02.20.pdf" target="_blank" class="aamrLink">hier</a>.
          </p>
          <p>
            De kantoorklachtenregeling vind je
            <a href="content/links/NL-klachtenregeling-2017.02.20.pdf" target="_blank" class="aamrLink">hier</a>.
          </p>
          </div>
        </div>
      </div>
      <div class="row mb-4">   
        <div class="col-16 col-md-12 offset-md-2 col-lg-8 offset-lg-4">
          <div class="box white-bg p-3">
          <HeadingX :level="3">Bedrijfsinformatie</HeadingX>

          <p>
            Reijns IP is ingeschreven bij de KvK te Amsterdam onder nummer: 67802702
          </p>
          <p>
            Het btw-nummer van Reijns IP is NL174816601B01
          </p>
          <p>
            De betalingsgegevens van Reijns IP zijn:

            <ul id="pay-ul">
              <li>A.A.M. Reijns te Amsterdam </li>
              <li>IBAN: NL70INGB0007713364</li>
              <li>BIC (SWIFT): NLINGB2A</li>
            </ul>
          </p>
          <p>
            Overeenkomstig de eisen van de Nederlandse Orde van Advocaten, heeft Reijns IP heeft een beroepsaansprakelijkheidsverzekering
            afgesloten bij Koekenberg Van Vuuren in Utrecht.
          </p>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import HorizontalCard from '~/components/HorizontalCard.vue'
import HeadingX from '~/components/HeadingX.vue'

export default {
  head() {
    return { title: this.$t("contact.title") };
  },
  components:{
    HorizontalCard,
    HeadingX
  },
  layout: "page-purple"
};
</script>