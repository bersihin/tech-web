<template>
  <div
    class="container mx-auto min-h-screen pt-36 lg:pt-32 lg:pb-4 px-8 lg:px-16 flex flex-col max-w-4xl"
  >
    <nuxt-link
      v-for="blog in blogs"
      :key="blog.slug"
      :to="`/blog/${blog.slug}`"
    >
      <div class="prose prose-sm sm:prose lg:prose-lg mx-auto mb-12">
        <h1>{{ blog.title }}</h1>
        <h4>{{ blog.description }}</h4>
        <p>{{ $dayjs(blog.createdAt).format('D MMMM YYYY') }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, error }) {
    const blogs = (await $content(`blogs`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })) as IContentDocument[]
    console.log({ blogs })
    return {
      blogs,
    }
  },
})
</script>