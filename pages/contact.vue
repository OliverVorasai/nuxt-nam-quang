<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Contact Us" />
    <InlineMessage :messages="inlinemessages" message-id="inline-3" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const inlinemessages = await $content('inlinemessages').fetch()

    return {
      inlinemessages,
    }
  },
}
</script>
