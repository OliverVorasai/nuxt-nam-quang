<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Contact Us" />
    <InlineMessage :message="getMessage(inlinemessages, 'inline-3')" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const inlinemessages = await $content('inlinemessages', params.slug).fetch()

    return {
      inlinemessages,
    }
  },
  methods: {
    getMessage(message, id) {
      return message.find((obj) => {
        return obj.id === id
      })
    },
  },
}
</script>
