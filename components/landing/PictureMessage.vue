<template>
  <div class="picture-message-container">
    <TopCalligraphyDivider />
    <v-row class="orange darken-1" no-gutters>
      <v-col cols="12" md="6" align-self="center" :order="setMessageOrder">
        <div class="pa-12">
          <h3 class="my-4">{{ message.title }}</h3>
          <nuxt-content :document="message" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="message.image"
          height="100%"
          :content-class="'unset-width'"
        ></v-img>
      </v-col>
    </v-row>
    <BottomCalligraphyDivider />
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    reverseOrder: {
      type: Boolean,
      required: true,
      default() {
        return false
      },
    },
  },
  computed: {
    setMessageOrder() {
      if (this.reverseOrder) {
        return 'last'
      } else {
        return 'first'
      }
    },
  },
}
</script>

<style>
.unset-width {
  width: unset !important;
}
</style>

<style scoped>
.picture-message-container {
  position: relative;
}
</style>
