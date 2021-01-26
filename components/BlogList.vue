<template>
  <v-col cols="12" sm="8" md="6">
    <v-card
      v-for="post in blog"
      :key="post.slug"
      :to="localePath(post.path)"
      nuxt
      flat
      class="my-12 highlight"
    >
      <v-row
        v-intersect.once="fadeOnIntersect"
        class="fade fade-out"
        no-gutters
      >
        <v-col md="4">
          <v-img max-height="256" max-width="512" :src="post.image"></v-img>
        </v-col>
        <v-col>
          <v-card-text>
            <div>{{ $d(new Date(post.createdAt), 'short') }}</div>
            <p class="display-1 text--primary">{{ post.title }}</p>
            <div class="text--primary">{{ post.description }}</div>
          </v-card-text>
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

<style scoped>
.highlight {
  border: 1px solid transparent;
  transition: border 0.75s;
}
.highlight:hover {
  border: 1px solid red;
}
</style>
