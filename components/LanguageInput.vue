<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="secondary" v-bind="attrs" v-on="on">
        <img
          v-if="$i18n.locale === 'en'"
          :src="require('@/assets/svg/united-states.svg')"
          class="flag"
        />
        <img
          v-else-if="$i18n.locale === 'vi'"
          :src="require('@/assets/svg/vietnam.svg')"
          class="flag"
        />
        {{ getLanguage }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(lang, index) in $i18n.locales"
        :key="index"
        :to="switchLocalePath(lang.code)"
      >
        <v-list-item-title>{{ lang.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  computed: {
    getLanguage() {
      if (this.$i18n.locale === 'en') {
        return 'English'
      } else if (this.$i18n.locale === 'vi') {
        return 'Tiếng Việt'
      } else {
        return 'Language'
      }
    },
  },
}
</script>

<style scoped>
.flag {
  height: 1.5em;
  margin-right: 0.5em;
}
</style>
