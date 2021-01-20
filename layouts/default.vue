<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      color="black"
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title white--text">
              Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <template v-for="item in leftLinks.concat(rightLinks)">
          <v-list-item :key="item.title" :to="item.to" router exact>
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
    <v-app-bar absolute prominent flat app color="white">
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
        <v-col cols="6" md="2" align-self="center" class="text-center">
          <v-row justify="end" justify-md="center" class="mr-2 mr-sm-0">
            <nuxt-link to="/" tag="span" style="cursor: pointer">
              <v-img
                max-height="128"
                max-width="128"
                :src="require('@/assets/svg/lotus.svg/')"
              ></v-img>
            </nuxt-link>
          </v-row>
        </v-col>
        <v-col align-self="center" class="hidden-sm-and-down">
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
          icon: 'mdi-apps',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-apps',
          title: 'Location',
          to: '/location',
        },
      ],
      rightLinks: [
        {
          icon: 'mdi-apps',
          title: 'Blog',
          to: '/blog',
        },
        {
          icon: 'mdi-apps',
          title: 'Calendar',
          to: '/calendar',
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
