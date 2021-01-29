<template>
  <v-row justify="center" align="center">
    <Hero
      :hero-images="heroImages"
      hero-id="hero-image-1"
      :hero-text="$t('blog')"
    />
    <InlineMessage :messages="inlineMessages" message-id="inline-5" dense />
    <BlogList :blog="blog" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blog = await $content('blog').sortBy('createdAt', 'desc').fetch()
    const inlineMessages = await $content('inlinemessages').fetch()
    const heroImages = await $content('heroimages').fetch()

    return {
      blog,
      inlineMessages,
      heroImages,
    }
  },
  head() {
    return {
      title: `${this.$t('blog')} | ${this.$t('namQuang')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('blogMetaDesc'),
        },
      ],
    }
  },
}
</script>
