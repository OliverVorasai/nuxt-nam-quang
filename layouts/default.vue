<template>
  <v-app>
    <v-app-bar absolute prominent flat app color="white">
      <v-row class="app-bar-row">
        <v-col align-self="center">
          <div class="text-right">
            <v-btn
              v-for="item in leftLinks"
              :key="item.title"
              :to="item.to"
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
        <v-col cols="2" align-self="center">
          <div class="text-center">
            <v-toolbar-title>
              <nuxt-link to="/" tag="span" style="cursor: pointer">
                <span class="text-wrap">{{ title }}</span>
              </nuxt-link>
            </v-toolbar-title>
          </div>
        </v-col>
        <v-col align-self="center">
          <div class="text-left">
            <v-btn
              v-for="item in rightLinks"
              :key="item.title"
              :to="item.to"
              :aria-label="item.title"
              class="transparent zoom mr-1"
              exact
              depressed
              nuxt
            >
              {{ item.title }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      leftLinks: [
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'Location',
          to: '/location',
        },
      ],
      rightLinks: [
        {
          title: 'Blog',
          to: '/blog',
        },
        {
          title: 'Calendar',
          to: '/calendar',
        },
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      title: 'Nam Quang Temple',
    }
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
</style>
