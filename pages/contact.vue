<template>
  <v-row justify="center" align="center">
    <Hero :hero-images="heroImages" hero-text="Contact Us" />
    <InlineMessage :messages="inlinemessages" message-id="inline-3" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const inlinemessages = await $content('inlinemessages').fetch()
    const heroImages = await $content('heroimages').fetch()

    return {
      inlinemessages,
      heroImages,
    }
  },
}
</script>
