<template>
  <v-col cols="12" sm="8" md="6">
    <v-card
      v-for="sutra in sutras"
      :key="sutra.slug"
      :to="`sutras/${sutra.slug}`"
      nuxt
      flat
      class="my-12 highlight"
    >
      <v-row
        v-intersect.once="fadeOnIntersect"
        class="fade fade-out"
        no-gutters
      >
        <v-card-text>
          <div>{{ $d(new Date(sutra.createdAt), 'short') }}</div>
          <p class="display-1 text--primary">
            {{ sutra.title }}
          </p>
          <!--
          <div class="text--primary">{{ sutra.description }}</div>
          -->
        </v-card-text>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    sutras: {
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
