<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Blog" />
    <InlineMessage :message="getMessage(inlineMessages, 'inline-5')" />
    <BlogList :blog="blog" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blog = await $content('blog').sortBy('createdAt', 'desc').fetch()
    const inlineMessages = await $content('inlinemessages').fetch()

    return {
      blog,
      inlineMessages,
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
