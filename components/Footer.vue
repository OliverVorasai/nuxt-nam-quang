<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="mt-16" no-gutters>
      <v-col cols="12" md="8">
        <v-row class="footer-text-container my-6" no-gutters>
          <v-col cols="12" md="4">
            <div>
              <h4 class="pb-4">{{ $t('siteNav') }}</h4>
              <ul>
                <li>
                  <nuxt-link :to="localePath('about')">About Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('temple')">
                    {{ $t('temple') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('blog')">{{
                    $t('blog')
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="4"> </v-col>
          <v-col cols="12" md="4"> </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="footer-text-container my-6" justify="end" no-gutters>
          <strong>{{ $t('namQuang') }}</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  background-image: linear-gradient(#292e49, #536976);
  opacity: 0.85;
}
.footer-text-container {
  position: relative;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.v-divider {
  border-color: rgba(0, 0, 0, 0.42);
}
ul {
  list-style-type: none;
  padding: 0;

  li {
    padding-bottom: 0.5em;
  }
  a {
    text-decoration: none;
    font-size: 0.875em;
    color: white;
  }
}
</style>
