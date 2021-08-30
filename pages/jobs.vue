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
      '8cfbec3e99794858a7a6d0ade9bcbfba'
    )
    return { blockMap }
  },
}
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>