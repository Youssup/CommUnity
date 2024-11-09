<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div
  class="hero min-h-screen"
  style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
      <p class="mb-5">
        Our App is used to help communities by showing them what type of organizations and clubs are around them. We can see community events,
        clubs, meetings, and organiztions infos with rating from members and the people to help you find exactly what your looking for.
      </p>

      <p class="mb-5">
        Now lets see some clubs around your community!
      </p>
      <RouterLink to="/clubPro">
      <button class="btn btn-primary">See Clubs</button>
    </RouterLink>
    </div>
  </div>
</div>
</template>

<style scoped>
.input {
  min-width: 300px;
  background-color: #f5f5f5;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 60px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
}

input:focus {
  border-bottom: 2px solid #5b5fc7;
  border-radius: 4px 4px 2px 2px;
}

input:hover {
  outline: 1px solid lightgrey;
}

</style>
