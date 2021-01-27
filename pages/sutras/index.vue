<template>
  <v-row justify="center" align="center">
    <Hero :hero-images="heroImages" :hero-text="$t('sutras')" />
    <InlineMessage :messages="inlinemessages" message-id="inline-3" />
    <SutraList :sutras="sutras" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const inlinemessages = await $content('inlinemessages').fetch()
    const heroImages = await $content('heroimages').fetch()
    const sutras = await $content(`sutras/${app.i18n.locale}`).fetch()

    return {
      inlinemessages,
      heroImages,
      sutras,
    }
  },
}
</script>
