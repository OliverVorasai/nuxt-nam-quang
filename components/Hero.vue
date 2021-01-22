<template>
  <div class="hero-image">
    <TopCalligraphyDivider />
    <v-img
      :src="require('@/assets/frontpage-banner.jpg')"
      min-height="400"
      eager
    >
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
