<template>
  <v-row justify="center" align="center" no-gutters>
    <Hero hero-text="Blog" />

    <v-col cols="12" sm="8" md="6">
      <v-card
        v-for="post in blog"
        :key="post.slug"
        :to="post.path"
        nuxt
        flat
        class="my-12 highlight"
      >
        <v-row no-gutters>
          <v-col>
            <v-img max-height="256" max-width="512" :src="post.image"></v-img>
          </v-col>
          <v-col>
            <v-card-text>
              <div>{{ formateDate(post.updatedAt) }}</div>
              <p class="display-1 text--primary">{{ post.title }}</p>
              <div class="text--primary">{{ post.description }}</div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blog = await $content('blog').fetch()

    return {
      blog,
    }
  },
  methods: {
    getMessage(message, id) {
      return message.find((obj) => {
        return obj.id === id
      })
    },
    formateDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.highlight {
  border: 1px solid transparent;
  transition: border 0.75s;
}
.highlight:hover {
  border: 1px solid red;
}
</style>
