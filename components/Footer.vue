<template>
  <footer class="bg-navy">
    <div class="container mx-auto text-white px-8 lg:px-16 py-8 lg:py-24">
      <div class="flex flex-col lg:flex-row mb-4 lg:mb-0 lg:pb-12">
        <div class="flex flex-row lg:w-1/12 mx-auto">
          <div
            class="flex flex-row w-full justify-around lg:justify-between items-center px-16 lg:px-0"
          >
            <a
              href="https://twitter.com/bersihin_tech"
              target="_blank"
              rel="noopener"
            >
              <img
                class="hidden md:block lg:w-8"
                style="z-index: -1"
                src="~assets/twitter.svg"
                alt=""
              />
            </a>
            <a
              href="https://github.com/bersihin"
              target="_blank"
              rel="noopener"
            >
              <img
                class="hidden md:block lg:w-8"
                style="z-index: -1"
                src="~assets/github.svg"
                alt=""
              />
            </a>
          </div>
          <div class="flex flex-col"></div>
        </div>
      </div>
      <div
        class="pt-4 lg:pt-12 border-t border-white flex flex-col lg:flex-row justify-between text-base lg:text-2xl text-center"
      >
        <span>bersihin.co@gmail.com</span>
        <span class="mt-2 lg:mt-0">
          © Bersihin.co 2021. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    socials: [
      {
        icon: 'web-home/twitter',
        url: 'https://twitter.com/bersihin_tech',
        label: 'Twitter',
      },
    ],
  }),
})
</script>
