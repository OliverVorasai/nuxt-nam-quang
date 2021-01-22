<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Nam Quang Temple" />
    <InlineMessage :message="getMessage(inlinemessages, 'inline-1')" />
    <PictureMessage
      :message="getMessage(picturemessages, 'picturemessage-1')"
      :reverse-order="false"
    />
    <InlineMessage :message="getMessage(inlinemessages, 'inline-2')" />
    <PictureMessage
      :message="getMessage(picturemessages, 'picturemessage-2')"
      :reverse-order="true"
    />
    <InlineMessage :message="getMessage(inlinemessages, 'inline-6')" dense />
    <BlogList :blog="blog" />
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog').sortBy('createdAt', 'desc').fetch()
    const inlinemessages = await $content('inlinemessages', params.slug).fetch()
    const picturemessages = await $content(
      'picturemessages',
      params.slug
    ).fetch()

    return {
      blog,
      inlinemessages,
      picturemessages,
    }
  },
  methods: {
    getMessage(message, id) {
      return message.find((obj) => {
        return obj.id === id
      })
    },
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
