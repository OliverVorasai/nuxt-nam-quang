<template>
  <v-col cols="12" sm="10" md="8" lg="6">
    <v-card v-for="post in blog" :key="post.slug" class="my-12">
      <v-row
        v-intersect.once="fadeOnIntersect"
        class="fade fade-out"
        no-gutters
      >
        <v-col md="4">
          <v-img class="card-image" :src="post.image"></v-img>
        </v-col>
        <v-col>
          <v-card-text>
            <div>{{ $d(new Date(post.createdAt), 'short') }}</div>
            <p class="display-1 text--primary">{{ post.title }}</p>
            <div class="text--primary">{{ post.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text class="info ml-2 mb-2" :to="`blog/${post.slug}`" nuxt>
              {{ $t('readMore') }}
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    blog: {
      type: Array,
      require: true,
      default: () => null,
    },
  },
}
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.card-image {
  height: 100%;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    max-height: 256px;
  }
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    max-height: 384px;
  }
}
</style>
