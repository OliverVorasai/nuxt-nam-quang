<template>
  <v-row justify="center" align="center" no-gutters>
    <Hero hero-text="Blog" />

    <v-col cols="12" sm="8" md="6">
      <v-card
        v-for="blog in blogs"
        :key="blog.slug"
        :to="blog.path"
        nuxt
        flat
        class="my-12 highlight"
      >
        <v-row no-gutters>
          <v-col>
            <v-img max-height="256" max-width="512" :src="blog.image"></v-img>
          </v-col>
          <v-col>
            <v-card-text>
              <div>{{ formateDate(blog.updatedAt) }}</div>
              <p class="display-1 text--primary">{{ blog.title }}</p>
              <div class="text--primary">{{ blog.description }}</div>
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
    const blogs = await $content('blogs').fetch()

    return {
      blogs,
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
  transition: border 1s;
}
.highlight:hover {
  border: 1px solid red;
}
</style>
