<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Blog Post" />
    <v-col cols="12" sm="10" md="8" lg="6" class="my-12">
      <h1 class="text-center">{{ blog.title }}</h1>
      <p class="text-right">{{ formateDate(blog.updatedAt) }}</p>
      <nuxt-content class="tester1" :document="blog" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blog/${params.slug}`).fetch()

    return {
      blog,
    }
  },
  methods: {
    formateDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped lang="scss">
::v-deep .nuxt-content {
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
}
</style>
