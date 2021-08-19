<template>
  <div>
    <Navbar v-if="!$route.path.startsWith('/notion')" />
    <Nuxt />
    <Footer v-if="!$route.path.startsWith('/notion')" />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>