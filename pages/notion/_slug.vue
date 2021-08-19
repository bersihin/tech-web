<template>
  <NotionRenderer
    :block-map="blockMap"
    :pageLinkOptions="pageLinkOptions"
    :mapPageUrl="mapPageUrl"
    full-page
    prism
  />
</template>

<script lang="ts">
import Vue from 'vue'
import 'prismjs'
import 'prismjs/themes/prism.css'

interface Page {
  id: string
  title: string
  route: string
  tags: string[]
  published: boolean
  preview: string
  date: string
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

    const blockMap = await $notion.getPageBlocks(page ? page.id : slug, 'https://notion-api-worker.darkgrimoire.workers.dev/v1')
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
      return `/notion/${pageId}`
    },
  },
})
</script>

<style>
@import 'vue-notion/src/styles.css'; /* optional Notion-like styles */
</style>