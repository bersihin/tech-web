<template>
  <div class="min-h-screen max-w-9/10 py-12 px-20 text-center">
    <h1 class="text-5xl font-bold">vue-notion-example</h1>
    <div>
      <div class="m-1 text-left">
        <h2 class="text-3xl font-bold">All Posts</h2>
        <ul class="my-1 mx-auto">
          <li class="flex items-center" v-for="(post, k) in posts" :key="k">
            <b>{{ post.date }}</b>
            <NuxtLink
              v-if="post.route"
              :to="mapPageUrl(post.route)"
              class="
                m-1
                ml-4
                rounded-lg
                border-1 border-ocean
                max-w-8/10
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
                text-ocean
                no-underline
                px-2
                py-4
                hover:text-white
                hover:bg-ocean
                transition-color
                duration-250
              "
            >
              <b>{{ post.title }}</b>
              {{ post.preview }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="m-1 text-left">
        <h2 class="text-3xl font-bold">All Tags</h2>
        <ul class="my-1 mx-auto">
          <li v-for="(tag, k) in tags" :key="k">
            <b>{{ tag }}</b>
            <ul class="my-1 mx-auto">
              <li class="flex items-center" v-for="(post, k) in postsByTag.get(tag)" :key="k">
                <NuxtLink
                  v-if="post.route"
                  :to="mapPageUrl(post.route)"
                  class="
                    m-1
                    ml-4
                    rounded-lg
                    border-1 border-ocean
                    max-w-8/10
                    whitespace-nowrap
                    overflow-ellipsis overflow-hidden
                    text-ocean
                    no-underline
                    px-2
                    py-4
                    hover:text-white
                    hover:bg-ocean
                    transition-color
                    duration-250
                  "
                >
                  <b>{{ post.title }}</b>
                  {{ post.preview }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
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
  date: string
}

export default Vue.extend({
  name: 'Homepage',
  // @ts-ignore: $notion undefined
  async asyncData({ $notion }) {
    const pageTable: Page[] = await $notion.getPageTable(
      '0df023f744ef475781834cce0703c5ef',
      'https://notion-api-worker.darkgrimoire.workers.dev/v1'
    )

    // sort published pages
    const posts = pageTable
      .filter((page) => page.published)
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

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
      return `/notion/${slug}`
    },
  },
})
</script>