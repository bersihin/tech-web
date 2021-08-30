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
      'c1f473da30cd48439c29feb755280979'
    )
    return { blockMap }
  },
}
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>