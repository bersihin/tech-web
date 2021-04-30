<template>
  <div>
    <div
      class="container mx-auto min-h-screen flex flex-col lg:flex-row justify-center items-center pt-40 pb-16 lg:py-0 px-8 lg:px-16 w-full"
    >
      <div class="lg:w-1/2">
        <h2
          class="font-bold text-3xl lg:text-4xl leading-tight lg:leading-normal"
        >
          We are developer behind Indonesia
          <span class="text-navy">best laundry services</span>
        </h2>
        <p class="mt-8 lg:mt-12 font-normal text-grey">
          Bersihin melakukan antar jemput cucian kamu dengan cara yang sangat
          mudah. Hanya dengan berlangganan, kamu tidak perlu repot untuk
          memikirkan baju kotor selama satu bulan.
        </p>
        <nuxt-link
          class="text-white py-5 block text-center lg:inline-block px-12 font-bold mt-6 lg:mt-10 bg-navy rounded-6xl hover:bg-blue-800 transition-bg duration-500"
          to="/"
        >
          Berlangganan Sekarang
        </nuxt-link>
      </div>
      <div class="lg:w-1/2 flex items-center justify-center">
        <img class="hidden md:block lg:w-10/12" src="~assets/hero.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({})
</script>