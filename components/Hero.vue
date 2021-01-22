<template>
  <div class="hero-image grey lighten-2">
    <TopCalligraphyDivider />
    <v-img
      v-intersect.once="fadeOnIntersect"
      :src="require('@/assets/frontpage-banner.jpg')"
      min-height="400"
      eager
      class="fade fade-out"
    >
      <v-row class="hero-text">
        <v-col align-self="center">
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
    heroText: {
      type: String,
      required: true,
      default() {
        return ''
      },
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
