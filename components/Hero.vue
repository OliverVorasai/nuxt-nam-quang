<template>
  <div class="hero-image grey lighten-2">
    <TopCalligraphyDivider />
    <v-img :src="randomImage.image" min-height="400" eager>
      <v-row class="hero-text">
        <v-col
          v-intersect.once="fadeOnIntersect"
          align-self="center"
          class="fade fade-out"
        >
          <h2 class="text-center text-h1 font-weight-medium white--text">
            {{ heroText }}
          </h2>
        </v-col>
      </v-row>
    </v-img>
    <BottomCalligraphyDivider />
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
    heroText: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  computed: {
    randomImage() {
      return this.heroImages[Math.floor(Math.random() * this.heroImages.length)]
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
    font-family: 'Lora', serif !important;
  }
}
</style>
