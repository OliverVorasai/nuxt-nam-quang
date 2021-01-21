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

<style scoped>
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
