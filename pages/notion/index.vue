<template>
  <div class="container">
    <div>
      <h1 class="text-5xl font-bold">vue-notion-example</h1>
      <div class="posts">
        <h2 class="text-3xl font-bold">All Posts</h2>
        <ul>
          <li class="flex items-center" v-for="(post, k) in posts" :key="k">
            <b>{{ post.date }}</b>
            <NuxtLink
              v-if="post.slug"
              :to="mapPageUrl(post.slug)"
              class="button--grey"
            >
              <b>{{ post.title }}</b>
              {{ post.preview }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="posts">
        <h2 class="text-3xl font-bold">All Tags</h2>
        <ul>
          <li v-for="(tag, k) in tags" :key="k">
            <b>{{ tag }}</b>
            <ul>
              <li v-for="(post, k) in postsByTag.get(tag)" :key="k">
                <NuxtLink
                  v-if="post.slug"
                  :to="mapPageUrl(post.slug)"
                  class="button--grey"
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
  async asyncData({ $notion }) {
    const pageTable: Page[] = await $notion.getPageTable(
      '10327f9074b7433aad577ccd0020e971'
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

<style scoped>
.button--green {
  display: inline-block;
  margin: 0.25em;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  margin: 0.25em;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 90%;
  padding: 4em 0.5em;
  display: block;
  text-align: center;
}
.logo {
  max-width: 100%;
  padding: 0.5em;
}
.nav a {
  color: #333 !important;
}
.links {
  padding: 1em 0 1.5em 0;
}
.posts {
  margin: 1em;
  text-align: left;
}
.container h2 {
  margin-top: 1.5em;
}
.container ul {
  margin: 1em auto;
  list-style: none;
}
.container p {
  margin: 0.75em 0;
}
.container a {
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>