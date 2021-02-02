<template>
  <v-row justify="center" align="center">
    <Hero
      :hero-images="heroImages"
      hero-id="hero-image-2"
      :hero-text="$t('sutras')"
    />
    <v-col cols="12" sm="10" md="8" lg="6" class="my-12">
      <v-btn color="info" :to="localePath('sutras')" nuxt>
        {{ $t('backToList') }}
      </v-btn>
      <h1 id="title" class="text-center">
        {{ sutra.title }}
        <a aria-hidden="true" :href="'#title'" tabindex="-1" class="hash-a-tag">
          <v-icon class="hash-link"> {{ mdiLink }} </v-icon>
        </a>
      </h1>
      <nuxt-content :document="sutra" />
    </v-col>
  </v-row>
</template>

<script>
import { mdiLink } from '@mdi/js'

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
  data() {
    return {
      mdiLink,
    }
  },
  head() {
    return {
      title: `${this.sutra.title} | ${this.$t('namQuang')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.sutra.description,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.hash-a-tag {
  text-decoration: unset;
}
.hash-link {
  transform: rotate(-45deg);
}

::v-deep .nuxt-content {
  ul {
    list-style: none;
  }
}
</style>
