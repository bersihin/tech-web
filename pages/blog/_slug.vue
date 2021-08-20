<template>
  <div
    class="
      container
      mx-auto
      min-h-screen
      py-16
      px-8
      lg:px-16
      mb-8
      flex flex-col
      max-w-4xl
    "
  >
    <NotionRenderer
      :block-map="blockMap"
      :pageLinkOptions="pageLinkOptions"
      :mapPageUrl="mapPageUrl"
      full-page
      prism
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'
import 'prismjs/themes/prism.css'

interface Page {
  id: string
  title: string
  route: string
  tags: string[]
  published: boolean
  preview: string
  createdAt: string
  updatedAt: string
}

export default Vue.extend({
  name: 'Post',
  // @ts-ignore: $notion undefined
  async asyncData({ $notion, params, error }) {
    const { slug } = params

    const pageTable: Page[] = await $notion.getPageTable(
      '0df023f744ef475781834cce0703c5ef',
      'https://notion-api-worker.darkgrimoire.workers.dev/v1'
    )
    const page = pageTable.find((item) => item.published && item.route === slug)

    const blockMap = await $notion.getPageBlocks(
      page ? page.id : slug,
      'https://notion-api-worker.darkgrimoire.workers.dev/v1'
    )
    if (!blockMap || blockMap.error) {
      return error({ statusCode: 404, message: 'Post not found' })
    }

    return { blockMap }
  },
  data: () => ({
    blockMap: null,
  }),
  computed: {
    pageLinkOptions() {
      return { component: 'NuxtLink', href: 'to' }
    },
  },
  methods: {
    mapPageUrl(pageId = '') {
      pageId = pageId.replace(/-/g, '')
      return `/blog/${pageId}`
    },
  },
})
</script>

<style>
@import 'vue-notion/src/styles.css'; /* optional Notion-like styles */
</style>