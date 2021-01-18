<template>
  <v-row justify="center" align="center">
    <Hero />
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
    <v-col cols="12" sm="8" md="6">
      <div>
        <h1>Notices</h1>
        <ul>
          <li v-for="notice in notices" :key="notice.slug">
            <div>
              <h2>{{ notice.title }}</h2>
              <nuxt-content :document="notice" />
            </div>
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const notices = await $content('notices', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()
    const inlinemessages = await $content('inlinemessages', params.slug).fetch()
    const picturemessages = await $content(
      'picturemessages',
      params.slug
    ).fetch()

    return {
      notices,
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
