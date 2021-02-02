<template>
  <v-col cols="12" :class="dense ? 'my-2 my-md-4' : 'my-8 my-md-16'">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div
          v-intersect.once="fadeOnIntersect"
          class="text-center fade fade-out"
        >
          <nuxt-content :document="quote" />
          <v-row justify="end">
            <p class="my-4 mr-4 text-uppercase text-h6 text-sm-h5">
              — {{ quote.author }}
            </p>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    quotes: {
      type: Array,
      required: true,
      default: () => [],
    },
    quoteId: {
      type: String,
      required: true,
      default: () => '',
    },
    dense: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  computed: {
    quote() {
      return this.quotes.find((obj) => {
        return obj.id === this.quoteId
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/_variables';

::v-deep .nuxt-content {
  font-display: swap;
  font-family: 'Vollkorn', serif;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    font-size: 1.5rem;
  }
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    font-size: 2rem;
  }
}
</style>
