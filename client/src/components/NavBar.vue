<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { exitComms } from '@/models/commsData'
import ClubScore from '@/assets/ClubScore.png'
</script>

<template>
  <div class="navbar bg-purple-800">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-purple-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
        >
          <RouterLink to="/" class="navbar-item" @click="exitComms()"
            ><li><a>Homepage</a></li></RouterLink
          >
          <RouterLink to="/clubs" class="navbar-items" @click="exitComms()"
            ><li><a>Clubs</a></li></RouterLink
          >
          <RouterLink to="/events" class="navbar-items" @click="exitComms()"
            ><li><a>Events</a></li></RouterLink
          >
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <img class="w-24" :src="ClubScore" alt="ClubScore" />
      <RouterLink to="/" class="navbar-item" @click="exitComms()">
      <a class="stuff btn btn-ghost text-yellow-400 text-xl text-white font-bold">Club Score</a>
    </RouterLink>
    </div>
    <div class="navbar-end">
      <!-- <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-24 md:w-auto bg-purple-600"
        />
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.stuff {
  margin-left: -3rem;
  font-family: Marker Felt, fantasy;
  font-size: xx-large;
}
</style>
