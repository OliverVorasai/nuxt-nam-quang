<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      app
      class="nav-drawer"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title white--text">
              {{ $t('namQuang') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <template v-for="item in leftLinks.concat(rightLinks)">
          <v-list-item :key="item.title" :to="localePath(item.to)" router exact>
            <v-list-item-icon>
              <v-icon color="white" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar absolute prominent flat app color="transparent">
      <v-row class="app-bar-row mt-1">
        <v-col cols="6" align-self="center" class="hidden-md-and-up">
          <v-app-bar-nav-icon
            color="black"
            aria-label="Show side navigation"
            @click.stop="drawer = !drawer"
          >
            <v-icon> mdi-menu </v-icon>
          </v-app-bar-nav-icon>
        </v-col>
        <v-col align-self="center" class="hidden-sm-and-down">
          <div class="text-right">
            <v-btn
              v-for="item in leftLinks"
              :key="item.title"
              :to="localePath(item.to)"
              :aria-label="item.title"
              class="transparent zoom ml-1"
              exact
              depressed
              nuxt
            >
              {{ item.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6" md="2" align-self="center" class="text-center">
          <v-row justify="end" justify-md="center" class="mr-2 mr-sm-0">
            <nuxt-link :to="localePath('/')">
              <v-img
                class="zoom"
                max-height="100"
                max-width="100"
                :src="require('@/assets/svg/dharma-wheel.svg/')"
              ></v-img>
            </nuxt-link>
          </v-row>
        </v-col>
        <v-col align-self="center" class="hidden-sm-and-down">
          <div class="text-left">
            <v-btn
              v-for="item in rightLinks"
              :key="item.title"
              :to="localePath(item.to)"
              :aria-label="item.title"
              class="transparent zoom mr-1"
              exact
              depressed
              nuxt
            >
              {{ item.title }}
            </v-btn>
            <LanguageInput />
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      leftLinks: [
        {
          icon: 'mdi-script-text-outline',
          title: this.$t('sutras'),
          to: 'sutras',
        },
        {
          icon: 'mdi-home-map-marker',
          title: this.$t('temple'),
          to: 'temple',
        },
      ],
      rightLinks: [
        {
          icon: 'mdi-post',
          title: this.$t('blog'),
          to: 'blog',
        },
      ],
    }
  },
  head() {
    // This must be merged if other metadata is added later
    // Refer: https://i18n.nuxtjs.org/seo/#merging-i18n-seo-metadata-with-your-own
    return this.$nuxtI18nSeo()
  },
}
</script>

<style scoped>
.app-bar-row {
  height: 100%;
}
.zoom {
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.2);
}
.nav-drawer {
  background-image: linear-gradient(#292e49, #536976);
  opacity: 0.95;
}
</style>
