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
    <NotionRenderer :blockMap="blockMap" fullPage />
  </div>
</template>

<script>
export default {
  data: () => ({ blockMap: null }),
  async asyncData({ $notion }) {
    const blockMap = await $notion.getPageBlocks(
      'a4fd4628c8c045d1b004fa820bc80481'
    )
    return { blockMap }
  },
  // @ts-ignore
  head() {
    const { route, title, preview, tags } = {
      route: 'event',
      title: 'Event | Bersihin Tech',
      preview: 'Things that being held or attended by our developer',
      tags: [
        'event',
        'bersihin',
        'tech',
        'developer',
        'programmer',
        'engineer',
        'register',
        'talk',
      ],
    }

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
          href: `https://tech.bersihin.co/${route}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://tech.bersihin.co/${route}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://tech.bersihin.co/${route}`,
        },
      ],
    }
  },
}
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>