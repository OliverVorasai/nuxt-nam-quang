<template>
  <v-col cols="12" class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="6" align-self="center" :order="setMessageOrder">
        <div v-intersect.once="fadeOnIntersect" class="pa-12 fade fade-out">
          <h3 class="my-4">{{ message.title }}</h3>
          <nuxt-content :document="message" />
        </div>
      </v-col>
      <v-col class="citation-bubble" cols="12" md="6">
        <v-img
          :src="message.image"
          height="100%"
          :content-class="'unset-width'"
          eager
        ></v-img>
        <SourceButton :source-link="message.source" />
      </v-col>
    </v-row>
  </v-col>
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
.citation-bubble {
  position: relative;
}
</style>
