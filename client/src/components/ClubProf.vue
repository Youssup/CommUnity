<script setup lang="ts">
import { ref } from 'vue';
const communities =ref([])
</script>

<template>
    <div class="flex flex-col items-center p-6">
      <!-- Profile Card -->
      <div class="bg-white rounded-lg shadow-lg p-8 w-full text-center">
        <!-- Profile Image -->
        <img class="w-40 h-40 rounded-full mx-auto mb-6" src="https://via.placeholder.com/200" alt="Profile Image" />
  
        <!-- Profile Name and Bio -->
        <h2 class="text-3xl font-semibold text-gray-800">John Doe</h2>
        <p class="text-lg text-gray-600 mt-3">Frontend Developer and Designer</p>
  
        <!-- Profile Stats -->
        <div class="flex justify-around mt-6 text-gray-700">
          <div>
            <p class="text-xl font-semibold">24</p>
            <p class="text-base text-gray-500">Projects</p>
          </div>
          <div>
            <p class="text-xl font-semibold">1.5k</p>
            <p class="text-base text-gray-500">Followers</p>
          </div>
          <div>
            <p class="text-xl font-semibold">85</p>
            <p class="text-base text-gray-500">Following</p>
          </div>
        </div>
  
        <!-- Profile Description -->
        <p class="mt-8 text-lg text-gray-600 leading-relaxed">
          Passionate about creating beautiful and user-friendly interfaces. Experienced in building web applications
          using modern technologies like Vue.js, Tailwind CSS, and more.
        </p>
  
        <!-- Profile Actions -->
        <div class="mt-8 flex justify-center space-x-6">
          <button class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Follow</button>
          <button class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">Message</button>
        </div>
      </div>
    </div>
  </template>
  
  

<style scoped>
.card{
    width: 400px;
    height: 400px;
}
</style>