<template>
  <v-row justify="center" align="center">
    <Hero
      :hero-images="heroImages"
      hero-id="hero-image-2"
      :hero-text="$t('sutras')"
    />
    <v-col cols="12" sm="10" md="8" lg="6" class="my-12">
      <h1 id="title" class="text-center">
        {{ sutra.title }}
        <a aria-hidden="true" :href="'#title'" tabindex="-1">
          <v-icon class="hash-link">mdi-link</v-icon>
        </a>
      </h1>
      <nuxt-content :document="sutra" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ app, $content, params }) {
    const sutra = await $content(
      `sutras/${app.i18n.locale}`,
      params.slug
    ).fetch()
    const heroImages = await $content('heroimages').fetch()

    return {
      sutra,
      heroImages,
    }
  },
}
</script>

<style scoped lang="scss">
.hash-link {
  transform: rotate(-45deg);
}

::v-deep .nuxt-content {
  ul {
    list-style: none;
  }
}
</style>
