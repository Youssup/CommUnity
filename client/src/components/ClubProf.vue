<script setup lang="ts">
import review from './MakeReview.vue'
import { calculateAverageRating, refComms } from '@/models/commsData'
import MakeEvent from './MakeEvent.vue'
import { computed } from 'vue'
const currentComm = refComms()

const avgRating = computed(() => calculateAverageRating())
</script>

<template>
  <meta charset="UTF-8" />
  <div
    class="flex flex-col items-center p-6"
    v-for="profile in currentComm"
    :key="profile.comms.id"
  >
    <!-- Profile Card -->
    <div class="bg-white rounded-lg shadow-lg p-8 w-full text-center">
      <!-- Profile Image -->
      <img
        class="w-40 h-40 rounded-full mx-auto mb-6"
        src="https://via.placeholder.com/200"
        alt="Profile Image"
      />

      <!-- Community Name and Bio -->
      <h2 class="text-3xl font-semibold text-gray-800">{{ profile.comms.name }}</h2>
      <div class="text-l">
        <p>
          <span v-for="star in Math.floor(avgRating)" :key="star">&#11088;</span>
          <span v-if="avgRating % 1 !== 0">&#9734;</span>
        </p>
      </div>

      <!-- Profile Stats -->
      <div class="flex justify-around mt-6 text-gray-700">
        <div>
          <p class="text-xl font-semibold">
            {{ profile.comms.address.street }}, {{ profile.comms.address.city }},
            {{ profile.comms.address.state }}, {{ profile.comms.address.zip }}
          </p>
          <p class="text-base text-gray-500">Location</p>
        </div>
        <div>
          <p class="text-xl font-semibold">{{ profile.comms.meetingTime }}</p>
          <p class="text-base text-gray-500">Times</p>
        </div>
        <div>
          <p class="text-xl font-semibold">{{ profile.comms.contact }}</p>
          <p class="text-base text-gray-500">Contact Info</p>
        </div>
      </div>

      <!-- Profile Description -->
      <p class="mt-8 text-lg text-gray-600 leading-relaxed">
        {{ profile.comms.description }}
      </p>

      <!-- Profile Actions -->
      <div class="mt-8 flex justify-center space-x-6">
        <MakeEvent />
        <review />
        <!-- <button class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">Message</button> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  height: 400px;
}
</style>
