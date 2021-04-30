<template>
  <footer class="bg-navy">
    <div class="container mx-auto text-white px-8 lg:px-16 py-8 lg:py-12">
      <div class="flex flex-col lg:flex-row">
        <div
          class="flex flex-row justify-between w-3/12 md:w-2/12 lg:w-1/12 mx-auto"
        >
          <a
            href="https://twitter.com/bersihin_tech"
            target="_blank"
            rel="noopener"
          >
            <img class="md:block w-6 md:w-8" src="~assets/twitter.svg" alt="" />
          </a>
          <a href="https://github.com/bersihin" target="_blank" rel="noopener">
            <img class="md:block w-6 md:w-8" src="~assets/github.svg" alt="" />
          </a>
        </div>
      </div>
      <div
        class="pt-4 lg:pt-8 flex flex-col lg:flex-row justify-center text-base lg:text-xl text-center"
      >
        <span class="mt-2 lg:mt-0">
          © Bersihin.co 2021. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
