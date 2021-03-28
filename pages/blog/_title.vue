<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const slug = params.title
    const page = await $content(`blogs/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
})
</script>