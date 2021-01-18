<template>
  <v-col cols="12" sm="8" md="4" class="my-8 my-md-16">
    <div class="text-center">
      <h3 class="my-4">{{ message.title }}</h3>
      <nuxt-content :document="message" />
    </div>
  </v-col>
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
  },
}
</script>
