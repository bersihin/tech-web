<template>
  <nav
    class="container mx-auto inset-x-0 px-8 flex flex-col lg:flex-row items-center py-6 lg:px-16 absolute"
  >
    <nuxt-link to="/">
      <img
        :src="
          $cloudinary.image.url(`web-home/${logo}.png`, {
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
      v-if="link"
      :class="[
        'flex flex-row mt-2 lg:mt-0 w-full flex-wrap justify-between lg:justify-start',
        { 'text-grey': variant === 'black' },
        { 'text-white': variant === 'white' },
      ]"
    >
      <div
        v-for="link in links"
        :key="link.title"
        class="relative lg:mr-8 text-sm lg:text-base"
        @click="link.open = !link.open"
      >
        <div class="flex items-center cursor-pointer">
          <nuxt-link
            v-if="!link.sub"
            :to="link.url"
            class="block text-center lg:w-auto"
            :exact-active-class="activeClass"
          >
            {{ link.title }}
          </nuxt-link>
          <button
            v-else
            :class="[
              'block text-center lg:w-auto focus:outline-none',
              {
                [activeClass]: $route.path.startsWith('/plan/'),
              },
            ]"
          >
            {{ link.title }}
          </button>
        </div>
        <div v-if="link.open" class="absolute flex flex-col">
          <nuxt-link
            v-for="sub in link.sub"
            :key="sub.url"
            :to="sub.url"
            class="mt-1 lg:mt-2"
          >
            {{ sub.title }}
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
    link: {
      type: Boolean,
      default: true,
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
  computed: {
    logo() {
      if (this.variant === 'black') return 'logo'
      else if (this.variant === 'white') return 'logo-white'
      return ''
    },
    arrow() {
      if (this.variant === 'black') return 'arrow-down'
      else if (this.variant === 'white') return 'arrow-down-white'
      return ''
    },
    activeClass() {
      const classes = ['font-bold']
      if (this.variant === 'black') classes.push('text-ocean')

      return classes.join(' ')
    },
  },
})
</script>
