<template>
  <v-row justify="center" class="mt-6">
    <Hero :hero-images="heroImages" hero-text="Location" />
    <InlineMessage :messages="inlinemessages" message-id="inline-4" dense />
    <iframe
      class="my-12"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.4817339303571!2d-122.51057885787223!3d45.547879244548774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a3b0c83ee391%3A0xadbeb8cb131af0f4!2sNam-Quang%20Temple!5e1!3m2!1sen!2sus!4v1611197122866!5m2!1sen!2sus"
      allowfullscreen="true"
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const inlinemessages = await $content('inlinemessages').fetch()
    const heroImages = await $content('heroimages').fetch()

    return {
      inlinemessages,
      heroImages,
    }
  },
}
</script>

<style scoped lang="scss">
iframe {
  background-color: lightgray;
  width: 95%;
  border-radius: 2em;
  min-height: 500px;

  @media screen and (max-width: 960px) {
    height: 50vh;
  }
  @media screen and (min-width: 961px) {
    height: 80vh;
  }
  border: 0;
}
</style>
