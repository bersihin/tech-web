<template>
  <div
    class="container mx-auto min-h-screen flex flex-col lg:flex-row justify-center items-center pt-36 md:pt-40 pb-16 lg:py-0 px-8 lg:px-16 w-full md:w-9/12 lg:w-full"
  >
    <div class="lg:w-1/2">
      <h2
        class="font-bold text-3xl md:text-4xl leading-tight lg:leading-normal"
      >
        We are developer behind Indonesia
        <span class="text-navy">best laundry services</span>
      </h2>
      <p class="mt-8 lg:mt-12 font-normal text-grey">
        Besides building our business system, we are interested to share what we
        have done and learned to you. We feel flattered if you interested to
        join us.
      </p>
      <nuxt-link
        class="text-white py-4 md:py-5 block text-center text-base lg:inline-block px-12 font-bold mt-6 lg:mt-10 bg-navy rounded-6xl hover:bg-blue-800 transition-bg duration-500 tracking-wide"
        to="/blog"
      >
        Read Our Blog
      </nuxt-link>
      <nuxt-link
        class="text-white ml-4 py-4 md:py-5 block text-center text-base lg:inline-block px-12 font-bold mt-6 lg:mt-10 bg-navy rounded-6xl hover:bg-blue-800 transition-bg duration-500 tracking-wide"
        to="/notion"
      >
        Notion Page Test
      </nuxt-link>
      <a
        class="text-white py-4 md:py-5 block text-center text-base lg:inline-block px-12 font-bold mt-6 lg:mt-10 bg-navy rounded-6xl hover:bg-blue-800 transition-bg duration-500 tracking-wide"
        href="https://www.notion.so/Game-Design-7cfe275ca0914153a0b9c4657551eed4"
        target="_blank"
      >
        Original Notion
      </a>
    </div>
    <div
      class="md:w-9/12 lg:w-1/2 hidden md:flex items-center justify-center md:mt-24 lg:mt-0"
    >
      <img class="lg:w-10/12" src="~assets/hero.png" alt="" />
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({})
</script>