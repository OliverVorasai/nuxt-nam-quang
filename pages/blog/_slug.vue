<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>Post last updated: {{ formateDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(`articles/${params.slug}`).fetch()

    return {
      article,
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
