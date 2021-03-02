<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="mt-16" no-gutters>
      <v-col cols="12" md="8">
        <v-row class="footer-text-container my-6" no-gutters>
          <v-col cols="12" sm="4">
            <div>
              <h4 class="pb-4">{{ $t('siteNav') }}</h4>
              <ul>
                <li>
                  <nuxt-link :to="localePath('sutras')">
                    {{ $t('sutras') }}
                  </nuxt-link>
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
          <v-col cols="12" sm="4"> </v-col>
          <v-col cols="12" sm="4" class="mt-4">
            <h4 class="pb-4">{{ $t('socialMedia') }}</h4>
            <v-btn
              v-for="item in socialItems"
              :key="item.name"
              :href="item.href"
              target="_blank"
              class="mr-2"
              :aria-label="item.name"
              rel="noopener"
              fab
              small
            >
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="footer-text-container my-6" justify="end" no-gutters>
          <a
            href="https://blossomwebdesigns.com/"
            rel="noopener"
            target="_blank"
            aria-label="Link to website designer"
            class="designer-link"
          >
            {{ $t('designedBy') }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiFacebook, mdiYoutube } from '@mdi/js'

export default {
  data() {
    return {
      socialItems: [
        {
          name: 'facebook',
          icon: mdiFacebook,
          href: 'https://www.facebook.com/chuanamquang',
        },
        {
          name: 'youtube',
          icon: mdiYoutube,
          href: 'https://www.youtube.com/user/namquangtemple',
        },
      ],
    }
  },
}
</script>

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
.designer-link {
  color: white;
  text-decoration: none;
}
</style>
