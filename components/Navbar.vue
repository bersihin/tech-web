<template>
  <nav
    class="container mx-auto inset-x-0 px-8 flex flex-col lg:flex-row items-center py-6 lg:px-16 absolute"
  >
    <nuxt-link to="/">
      <img
        :src="
          $cloudinary.image.url(`web-home/logo.png`, {
            width: 200,
            crop: 'fill',
          })
        "
        alt="Bersihin Logo"
        width="150"
        style="backface-visibility: hidden"
        class="mb-4 lg:mb-0 lg:mr-24"
      />
    </nuxt-link>
    <div
      class="flex flex-row mt-2 lg:mt-0 w-64 lg:w-full flex-wrap justify-between lg:justify-start text-grey"
    >
      <div
        v-for="link in links"
        :key="link.title"
        class="relative lg:mr-8 text-sm lg:text-base"
      >
        <div class="flex items-center cursor-pointer">
          <nuxt-link
            :to="link.url"
            class="block text-center lg:w-auto"
            exact-active-class="font-bold text-ocean"
          >
            {{ link.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    variant: {
      type: String,
      default: 'black',
    },
  },
  data: () => ({
    links: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Blog',
        url: '/blog',
      },
      {
        title: 'Event',
        url: '/event',
      },
      {
        title: 'Jobs',
        url: '/jobs',
      },
      {
        title: 'About',
        url: '/about',
      },
    ],
  }),
})
</script>
