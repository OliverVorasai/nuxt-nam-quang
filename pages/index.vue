<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Nam Quang Temple" />
    <InlineMessage :messages="inlinemessages" message-id="inline-1" />
    <PictureMessage
      :messages="picturemessages"
      message-id="picturemessage-1"
      :reverse-order="false"
    />
    <InlineMessage :messages="inlinemessages" message-id="inline-2" />
    <PictureMessage
      :messages="picturemessages"
      message-id="picturemessage-2"
      :reverse-order="true"
    />
    <InlineMessage :messages="inlinemessages" message-id="inline-6" dense />
    <BlogList :blog="blog" />
    <v-col cols="12" class="text-center">
      <v-btn :to="'/blog'" exact nuxt dark x-large color="indigo">
        <v-icon left> mdi-post </v-icon>
        View More Blog Posts
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blog = await $content('blog')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    const inlinemessages = await $content('inlinemessages').fetch()
    const picturemessages = await $content('picturemessages').fetch()

    return {
      blog,
      inlinemessages,
      picturemessages,
    }
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
