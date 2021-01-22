<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Blog" />
    <InlineMessage :messages="inlineMessages" message-id="inline-5" dense />
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
}
</script>
