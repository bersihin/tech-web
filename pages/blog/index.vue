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
        <p class="text-sm lg:text-base">
          <span>
            Published:
            {{ $dayjs(blog.createdAt).format('D MMMM YYYY') }}.
          </span>
          <span>
            Last updated:
            {{ $dayjs(blog.updatedAt).format('D MMMM YYYY') }}.
          </span>
        </p>
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
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })) as IContentDocument[]

    return {
      blogs,
    }
  },
})
</script>