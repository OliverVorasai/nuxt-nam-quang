<template>
  <v-row justify="center" align="center">
    <Hero :hero-images="heroImages" :hero-text="$t('sutras')" />
    <SutraList :sutras="sutras" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const inlinemessages = await $content('inlinemessages').fetch()
    const heroImages = await $content('heroimages').fetch()
    const sutras = await $content(`sutras/${app.i18n.locale}`)
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      inlinemessages,
      heroImages,
      sutras,
    }
  },
}
</script>
