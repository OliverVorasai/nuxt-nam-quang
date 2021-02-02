<template>
  <div class="hero-image">
    <v-img :src="heroImage.image" height="50vh" eager>
      <v-row class="hero-text">
        <v-col
          v-intersect.once="fadeOnIntersect"
          align-self="center"
          class="fade fade-out"
        >
          <h2
            class="text-center text-h3 text-sm-h2 text-md-h1 font-weight-medium white--text"
          >
            {{ heroText }}
          </h2>
        </v-col>
      </v-row>
    </v-img>
    <SourceButton :source-link="heroImage.source" />
  </div>
</template>

<script>
export default {
  props: {
    heroImages: {
      type: Array,
      require: true,
      default: () => [],
    },
    heroId: {
      type: String,
      require: true,
      default: () => '',
    },
    heroText: {
      type: String,
      required: false,
      default: () => '',
    },
  },
  computed: {
    heroImage() {
      return this.heroImages.find((obj) => {
        return obj.id === this.heroId
      })
    },
  },
}
</script>

<style scoped lang="scss">
.hero-image {
  width: 100%;
  position: relative;
}

.hero-text {
  height: 100%;
  h2 {
    font-display: swap;
    font-family: 'Lora', serif !important;
  }
}
</style>
