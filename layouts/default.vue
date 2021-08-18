<template>
  <div>
    <Navbar v-if="!$route.path.startsWith('/notion')" />
    <Nuxt />
    <Footer v-if="!$route.path.startsWith('/notion')" />
  </div>
</template>