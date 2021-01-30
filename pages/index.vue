<template>
  <v-row justify="center" align="center">
    <Hero
      :hero-images="heroImages"
      hero-id="hero-image-3"
      :hero-text="$t('namQuang')"
    />
    <InlineMessage :messages="inlineMessages" message-id="inline-1" />
    <PictureMessage
      :messages="pictureMessages"
      message-id="picture-message-1"
      :reverse-order="false"
      class="primary"
    />
    <QuoteMessage :quotes="quoteMessages" quote-id="thich-nhat-hanh-1" />
    <PictureMessage
      :messages="pictureMessages"
      message-id="picture-message-2"
      :reverse-order="true"
      class="accent"
    />
    <InlineMessage :messages="inlineMessages" message-id="inline-6" dense />
    <BlogList :blog="blog" />
    <v-col cols="12" class="text-center">
      <v-btn :to="localePath('blog')" exact nuxt dark x-large class="secondary">
        <v-icon left> mdi-post </v-icon>
        {{ $t('viewMore') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const blog = await $content('blog')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    const quoteMessages = await $content(
      `quotemessages/${app.i18n.locale}`
    ).fetch()
    const inlineMessages = await $content(
      `inlinemessages/${app.i18n.locale}`
    ).fetch()
    const pictureMessages = await $content(
      `picturemessages/${app.i18n.locale}`
    ).fetch()
    const heroImages = await $content('heroimages').fetch()
    const businessInfo = await $content(
      'businessInfo/single-businessInfo'
    ).fetch()

    return {
      blog,
      quoteMessages,
      inlineMessages,
      pictureMessages,
      heroImages,
      businessInfo,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': this.businessInfo.type,
            '@id': this.businessInfo.id,
            name: this.businessInfo.name,
            address: {
              '@type': this.businessInfo.address.addressType,
              streetAddress: this.businessInfo.address.addressStreet,
              addressLocality: this.businessInfo.address.addressLocality,
              addressRegion: this.businessInfo.address.addressRegion,
              postalCode: this.businessInfo.address.postalCode,
              addressCountry: this.businessInfo.address.addressCountry,
            },
            url: this.businessInfo.url,
            telephone: this.businessInfo.telephone,
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: this.businessInfo.weekdayHours.opens,
                closes: this.businessInfo.weekdayHours.closes,
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: this.businessInfo.weekendHours.opens,
                closes: this.businessInfo.weekendHours.closes,
              },
            ],
          },
        },
      ],
      title: `${this.$t('home')} | ${this.$t('namQuang')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('indexMetaDesc'),
        },
      ],
    }
  },
}
</script>
