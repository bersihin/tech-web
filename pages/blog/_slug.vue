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
import 'prismjs/components/prism-javascript'
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
  data: () => ({
    pageLinkOptions: { component: 'NuxtLink', href: 'to' },
  }),
  // @ts-ignore
  async asyncData({ $notion, params, error }) {
    const { slug } = params

    const pageTable: Page[] = await $notion.getPageTable(
      '0df023f744ef475781834cce0703c5ef'
    )
    const page = pageTable.find((item) => item.published && item.route === slug)

    const blockMap = await $notion.getPageBlocks(page ? page.id : slug)
    if (!blockMap || blockMap.error) {
      return error({ statusCode: 404, message: 'Post not found' })
    }

    return { page, blockMap }
  },
  // @ts-ignore
  head() {
    // @ts-ignore
    const { route, title, preview, tags } = this.page as Page

    return {
      title: title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: tags.join(','),
        },

        // Title
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        { hid: 'application-name', name: 'application-name', content: title },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: title,
        },

        // Description
        {
          hid: 'description',
          name: 'description',
          content: preview,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: preview,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: preview,
        },

        // URL
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://tech.bersihin.co/blog/${route}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://tech.bersihin.co/blog/${route}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://tech.bersihin.co/blog/${route}`,
        },
      ],
    }
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
@import 'vue-notion/src/styles.css';
</style>
