<template>
  <v-row justify="center" align="center">
    <Hero
      :hero-images="heroImages"
      hero-id="hero-image-3"
      :hero-text="$t('namQuang')"
    />
    <InlineMessage :messages="inlinemessages" message-id="inline-1" />
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
    <InlineMessage :messages="inlinemessages" message-id="inline-6" dense />
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
    const inlinemessages = await $content('inlinemessages').fetch()
    const pictureMessages = await $content(
      `picturemessages/${app.i18n.locale}`
    ).fetch()
    const heroImages = await $content('heroimages').fetch()

    return {
      blog,
      quoteMessages,
      inlinemessages,
      pictureMessages,
      heroImages,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
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
