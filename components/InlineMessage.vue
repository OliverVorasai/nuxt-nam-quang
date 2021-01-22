<template>
  <v-col cols="12" :class="dense ? 'my-2 my-md-4' : 'my-8 my-md-16'">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div
          v-intersect.once="fadeOnIntersect"
          class="text-center fade fade-out"
        >
          <h3 class="my-4">{{ message.title }}</h3>
          <nuxt-content :document="message" />
        </div>
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
    dense: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  computed: {
    message() {
      return this.messages.find((obj) => {
        return obj.id === this.messageId
      })
    },
  },
}
</script>
