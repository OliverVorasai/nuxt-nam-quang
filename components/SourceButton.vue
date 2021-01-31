<template>
  <v-btn
    :href="sourceLink"
    target="_blank"
    class="source-button mr-1 mb-1"
    color="white"
    rounded
    x-small
    outlined
  >
    {{ $t('source', { url: sourceDomain }) }}
  </v-btn>
</template>

<script>
export default {
  props: {
    sourceLink: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  computed: {
    sourceDomain() {
      return new URL(this.sourceLink).hostname.replace(/^[^.]+\./g, '')
    },
  },
}
</script>

<style scoped>
.source-button {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
