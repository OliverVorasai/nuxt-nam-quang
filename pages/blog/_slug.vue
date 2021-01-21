<template>
  <div>
    <h2>{{ blog.title }}</h2>
    <p>Post last updated: {{ formateDate(blog.updatedAt) }}</p>
    <nuxt-content :document="blog" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blogs/${params.slug}`).fetch()

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
