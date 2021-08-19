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
  date: string
  id: string
  preview: string
  published: boolean
  slug: string
  tags: string[]
  title: string
}

export default Vue.extend({
  name: 'Homepage',
  // @ts-ignore: $notion undefined
  async asyncData({ $notion, params, error }) {
    const { slug } = params
    const pageTable : Page[] = await $notion.getPageTable(
      '10327f9074b7433aad577ccd0020e971'
    )
    const page = pageTable.find((item) => item.published && item.slug === slug)
    const blockMap = await $notion.getPageBlocks(page ? page.id : slug)
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