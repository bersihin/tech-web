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
      <img
        class="hidden md:block lg:w-1/2"
        style="z-index: -1"
        :src="$cloudinary.image.url('web-home/hero')"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({  
  data: () => ({
    selectedLocationTab: 'main',
    values: [
      {
        icon: 'icons/stopwatch.png',
        title: 'Jam Pengambilan Bervariasi',
        description:
          'Jam pengambilan kami bervariasi dari jam 1 siang hingga jam 10 malam.',
      },
      {
        icon: 'icons/thumbs-up.png',
        title: 'Kualitas Pencucian',
        description:
          'Kami sangat memperhatikan kebersihan pakaian yang kamu cuci karena itu akan memengaruhi kenyamanan harianmu.',
      },
      {
        icon: 'icons/badge.png',
        title: 'Garansi Layanan',
        description:
          'Kami memberikan garansi kerusakan dan kehilangan laundry kamu hingga Rp 500.000.',
      },
    ],
  }),
})
</script>