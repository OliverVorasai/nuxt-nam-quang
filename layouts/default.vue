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
        <template
          v-for="item in navDrawerLinks.concat(leftLinks.concat(rightLinks))"
        >
          <v-list-item
            :key="item.title"
            :to="localePath(item.to)"
            router
            nuxt
            exact
          >
            <v-list-item-icon>
              <v-icon color="white" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="$t(item.title)" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-switch
        v-model="$vuetify.theme.dark"
        :label="$t('darkMode')"
        class="ml-4"
        dark
      ></v-switch>
      <span class="ml-4">
        <LanguageInput />
      </span>
    </v-navigation-drawer>
    <v-app-bar absolute prominent flat app color="transparent">
      <v-row class="app-bar-row mt-1">
        <v-col cols="6" align-self="center" class="hidden-md-and-up">
          <v-app-bar-nav-icon
            aria-label="Show side navigation"
            @click.stop="drawer = !drawer"
          >
            <v-icon> {{ mdiMenu }} </v-icon>
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
              {{ $t(item.title) }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6" md="2" align-self="center" class="text-center">
          <v-row justify="end" justify-md="center" class="mr-2 mr-sm-0">
            <nuxt-link :to="localePath('/')" aria-label="home">
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
              {{ $t(item.title) }}
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
import {
  mdiHome,
  mdiScriptTextOutline,
  mdiHomeMapMarker,
  mdiPost,
  mdiMenu,
} from '@mdi/js'

export default {
  data() {
    return {
      mdiMenu,
      drawer: false,
      navDrawerLinks: [
        {
          icon: mdiHome,
          title: 'home',
          to: '/',
        },
      ],
      leftLinks: [
        {
          icon: mdiScriptTextOutline,
          title: 'sutras',
          to: 'sutras',
        },
        {
          icon: mdiHomeMapMarker,
          title: 'temple',
          to: 'temple',
        },
      ],
      rightLinks: [
        {
          icon: mdiPost,
          title: 'blog',
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
