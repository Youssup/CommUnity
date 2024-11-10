<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
.bg-container {
  background-color: #f3f4f6;
}
</style>
