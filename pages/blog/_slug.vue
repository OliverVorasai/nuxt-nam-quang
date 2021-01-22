<template>
  <v-row justify="center" align="center">
    <Hero hero-text="Blog Post" />
    <v-col cols="12" sm="10" md="8" lg="6" class="my-12">
      <h1 id="title" class="text-center">
        {{ blog.title }}
        <a aria-hidden="true" :href="'#title'" tabindex="-1">
          <v-icon class="hash-link">mdi-link</v-icon>
        </a>
      </h1>
      <p class="text-right">{{ formateDate(blog.createdAt) }}</p>
      <p
        v-if="blog.createdAt !== blog.updatedAt"
        class="text-right text-caption"
      >
        Updated on: {{ formateDate(blog.updatedAt) }}
      </p>
      <nuxt-content class="tester1" :document="blog" />
    </v-col>
    <v-col cols="12" class="mb-12">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-row>
            <v-col cols="6">
              <NuxtLink
                v-if="prev"
                :to="{
                  name: 'blog-slug',
                  params: { slug: prev.slug },
                  hash: '#title',
                }"
              >
                Prev
              </NuxtLink>
            </v-col>
            <v-col cols="6" class="text-right">
              <NuxtLink
                v-if="next"
                :to="{
                  name: 'blog-slug',
                  params: { slug: next.slug },
                  hash: '#title',
                }"
              >
                Next
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      blog,
      prev,
      next,
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
@import '~vuetify/src/styles/settings/_variables';

::v-deep .nuxt-content {
  img {
    float: left;
    max-height: 500px;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    padding-right: 1em;
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  ::v-deep .nuxt-content {
    img {
      max-height: unset;
      height: auto;
      width: 100%;
      padding-bottom: 1em;
    }
  }
}

.hash-link {
  transform: rotate(-45deg);
}
</style>
