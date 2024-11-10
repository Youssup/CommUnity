<script setup lang="ts">
import { ref } from "vue";
import ClubCard from"../components/ClubCard.vue"
import review from "../components/MakeReview.vue"
import userReview from "../components/ReviewCard.vue"

import { refComms} from "@/models/commsData";
import { getAll, type Community } from "@/models/Communities";

const comms = ref<Community[]>([])
comms.value = getAll().data

const currentComm= refComms()

</script>

<template>
    
    <div class="container min-h-screen">
        <review />
        <ClubCard
        v-for="comm in comms"
        :key="comm.id"
        :comms="comm"
      
    />
    </div>

</template>

<style scoped>

</style>