<template>
  <div
    class="
      container
      mx-auto
      min-h-screen
      pt-36
      lg:pt-32
      lg:pb-4
      px-8
      lg:px-16
      flex flex-col
      max-w-4xl
    "
  >
    <nuxt-link
      v-for="post in posts"
      :key="post.route"
      :to="`/blog/${post.route}`"
    >
      <div class="prose prose-sm sm:prose lg:prose-lg mx-auto mb-12">
        <h1>{{ post.title }}</h1>
        <h4 class="whitespace-nowrap overflow-ellipsis overflow-hidden">
          {{ post.preview }}
        </h4>
        <p class="text-sm lg:text-base">
          <span>
            Published:
            {{ $dayjs(post.createdAt).format('D MMMM YYYY') }}.
          </span>
          <span>
            Last updated:
            {{ $dayjs(post.updatedAt).format('D MMMM YYYY') }}.
          </span>
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
  name: 'Homepage',
  // @ts-ignore: $notion undefined
  async asyncData({ $notion }) {
    const pageTable: Page[] = await $notion.getPageTable(
      '0df023f744ef475781834cce0703c5ef'
    )

    // sort published pages
    const posts = pageTable
      .filter((page) => page.published)
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))

    // convert array of pages to a map of tags with page arrays
    const postsByTag = pageTable
      .filter((page) => page.published)
      .reduce((map, currentPage) => {
        currentPage.tags.forEach((tag) =>
          map.has(tag)
            ? map.set(tag, [...map.get(tag), currentPage])
            : map.set(tag, [currentPage])
        )
        return map
      }, new Map())

    return {
      posts,
      postsByTag,
      tags: [...postsByTag.keys()].sort(),
    }
  },
  methods: {
    mapPageUrl(slug: string) {
      return `/blog/${slug}`
    },
  },
})
</script>