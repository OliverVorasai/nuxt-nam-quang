<template>
  <v-row justify="center" align="center">
    <Hero
      :hero-images="heroImages"
      hero-id="hero-image-1"
      :hero-text="$t('blog')"
    />
    <v-col cols="12" sm="10" md="8" lg="6" class="my-12">
      <v-btn color="info" :to="localePath('blog')" nuxt>
        {{ $t('backToList') }}
      </v-btn>
      <h1 id="title" class="text-center">
        {{ blogPost.title }}
        <a aria-hidden="true" :href="'#title'" tabindex="-1" class="hash-a-tag">
          <v-icon class="hash-link">mdi-link</v-icon>
        </a>
      </h1>
      <p class="text-right">{{ $d(new Date(blogPost.createdAt), 'short') }}</p>
      <p
        v-if="blogPost.createdAt !== blogPost.updatedAt"
        class="text-right text-caption"
      >
        {{
          $t('updatedOn', { date: $d(new Date(blogPost.updatedAt), 'short') })
        }}
      </p>
      <nuxt-content
        :class="{ 'wrap-image': !blogPost.blockImage }"
        :document="blogPost"
      />
    </v-col>
    <v-col cols="12" class="mb-12">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-row>
            <v-col cols="6">
              <v-btn
                v-if="prev"
                :to="
                  localePath({
                    name: 'blog-slug',
                    params: { slug: prev.slug },
                    hash: '#title',
                  })
                "
                color="info"
              >
                {{ $t('prev') }}
              </v-btn>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                v-if="next"
                :to="
                  localePath({
                    name: 'blog-slug',
                    params: { slug: next.slug },
                    hash: '#title',
                  })
                "
                color="info"
              >
                {{ $t('next') }}
              </v-btn>
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
    const blogPost = await $content('blog', params.slug).fetch()
    const heroImages = await $content('heroimages').fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      blogPost,
      prev,
      next,
      heroImages,
    }
  },
  head() {
    return {
      title: `${this.blogPost.title} | ${this.$t('namQuang')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/_variables';

::v-deep .nuxt-content {
  img {
    max-height: 500px;
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
}

::v-deep .wrap-image {
  img {
    float: left;
    padding-right: 1em;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  ::v-deep .wrap-image {
    img {
      padding-right: unset;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  ::v-deep .wrap-image {
    img {
      max-height: unset;
      height: auto;
      width: 100%;
      padding-bottom: 1em;
    }
  }
}

.hash-a-tag {
  text-decoration: unset;
}

.hash-link {
  transform: rotate(-45deg);
}
</style>
