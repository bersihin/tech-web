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
  async asyncData({ $notion }) {
    const blockMap = await $notion.getPageBlocks(
      '8cfbec3e99794858a7a6d0ade9bcbfba'
    )
    return { blockMap }
  },
  head() {
    const { route, title, preview, tags } = {
      route: 'about',
      title: 'Jobs | Bersihin Tech',
      preview: 'Join us to create a better laundry services',
      tags: [
        'job',
        'opportunity',
        'bersihin',
        'tech',
        'open',
        'work',
        'developer',
        'engineer',
        'programmer',
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