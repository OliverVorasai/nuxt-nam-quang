<template>
  <v-col cols="12" sm="8" md="6">
    <v-card v-for="sutra in sutras" :key="sutra.slug" class="my-12">
      <v-row
        v-intersect.once="fadeOnIntersect"
        class="fade fade-out"
        no-gutters
      >
        <v-card-text>
          <p class="display-1 text--primary">
            {{ sutra.title }}
          </p>
          <div class="text--primary">{{ sutra.description }}..</div>
        </v-card-text>
        <v-card-actions>
          <v-btn text class="info ml-2 mb-2" :to="`sutras/${sutra.slug}`" nuxt>
            {{ $t('readThisSutra') }}
          </v-btn>
        </v-card-actions>
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
