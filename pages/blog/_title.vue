<template>
  <div>
    <div
      class="container mx-auto pt-36 lg:pt-32 pb-12 lg:pb-16 px-8 lg:px-16 flex flex-col max-w-4xl"
    >
      <div class="prose prose-sm sm:prose lg:prose-lg mx-auto mb-6">
        <h1>{{ page.title }}</h1>
        <h4>{{ page.description }}</h4>
      </div>
      <nuxt-content
        :document="page"
        class="prose prose-sm sm:prose lg:prose-lg mx-auto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const slug = params.title
    const page = (await $content(`blogs/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })) as IContentDocument

    delete page.excerpt

    return {
      page,
    }
  },
})
</script>