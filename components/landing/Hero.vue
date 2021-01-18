<template>
  <div class="hero-image">
    <TopCalligraphyDivider />
    <v-img :src="require('@/assets/frontpage-banner.jpg')" min-height="400">
      <v-row class="hero-text">
        <v-col align-self="center">
          <h2 class="text-center text-h1 font-weight-medium white--text">
            Nam Quang Temple
          </h2>
        </v-col>
      </v-row>
    </v-img>
    <BottomCalligraphyDivider />
  </div>
</template>

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
