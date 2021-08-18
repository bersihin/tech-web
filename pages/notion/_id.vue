<template>
  <NotionRenderer :block-map="blockMap" :mapPageUrl="mapPageUrl" full-page />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Homepage',
  // @ts-ignore: $notion undefined
  async asyncData({ $notion, params }) {
    const id = params.id
    const blockMap = await $notion.getPageBlocks(
      id,
      'https://notion-api-worker.darkgrimoire.workers.dev/v1',
    )
    return { blockMap };
  },
  data: () => ({
    blockMap: null,
  }),
  methods: {
    mapPageUrl(pageId = "") {
      pageId = pageId.replace(/-/g, "");
      return `/notion/${pageId}`;
    }
  },
})

</script>

<style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */
</style>