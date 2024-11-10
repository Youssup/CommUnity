<script setup lang="ts">
import { ref } from 'vue'
import ClubCard from '../components/ClubCard.vue'
//import review from "../components/MakeReview.vue"
//import userReview from "../components/ReviewCard.vue"

//import { refComms} from "@/models/commsData";
import { getAll, type Community } from '@/models/Communities'

const comms = ref<Community[]>([])
comms.value = getAll().data

//const currentComm= refComms()
</script>

<template>
  <div class="container min-h-screen">
    <div class="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
      <ClubCard v-for="comm in comms" :key="comm.id" :comms="comm" />
    </div>
  </div>
</template>

<style scoped></style>
