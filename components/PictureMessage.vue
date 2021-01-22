<template>
  <div class="picture-message-container">
    <TopCalligraphyDivider />
    <v-row :class="colorClasses" no-gutters>
      <v-col cols="12" md="6" align-self="center" :order="setMessageOrder">
        <div v-intersect.once="fadeOnIntersect" class="pa-12 fade fade-out">
          <h3 class="my-4">{{ message.title }}</h3>
          <nuxt-content :document="message" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :src="message.image"
          height="100%"
          :content-class="'unset-width'"
          eager
        ></v-img>
      </v-col>
    </v-row>
    <BottomCalligraphyDivider />
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
      default: () => null,
    },
    messageId: {
      type: String,
      required: true,
      default: () => '',
    },
    reverseOrder: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    colorClasses: {
      type: String,
      require: false,
      default: () => 'orange',
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
    message() {
      return this.messages.find((obj) => {
        return obj.id === this.messageId
      })
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
