<template>
  <div
    class="
      container
      mx-auto
      min-h-screen
      flex flex-col
      lg:flex-row
      justify-center
      items-center
      pt-36
      md:pt-40
      pb-16
      lg:py-0
      px-8
      lg:px-16
      w-full
      md:w-9/12
      lg:w-full
    "
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
      <div class="flex items-stretch flex-col lg:flex-row">
        <nuxt-link
          class="
            text-white
            border-2 border-navy
            py-3
            md:py-4
            block
            text-center text-base
            lg:inline-block
            px-12
            font-bold
            mt-6
            lg:mt-10
            bg-navy
            rounded-6xl
            hover:bg-white
            hover:text-navy
            transition-bg
            duration-500
            tracking-wide
          "
          to="/blog"
        >
          Read Our Blog
        </nuxt-link>
        <a
          class="
            text-navy
            border-2 border-navy
            py-3
            md:py-4
            text-center text-base
            px-12
            font-bold
            mt-6
            lg:mt-10
            rounded-6xl
            hover:bg-navy
            hover:text-white
            transition-bg
            duration-500
            tracking-wide
            ml-0
            lg:ml-6
          "
          target="_blank"
          rel="noopener noreferrer"
          href="https://bersihin.co"
        >
          Visit Bersihin
        </a>
      </div>
    </div>
    <div
      class="
        md:w-9/12
        lg:w-1/2
        hidden
        md:flex
        items-center
        justify-center
        md:mt-24
        lg:mt-0
      "
    >
      <img class="lg:w-10/12" src="~assets/hero.png" alt="" />
    </div>
  </div>
</template>