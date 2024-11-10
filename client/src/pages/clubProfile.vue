<script setup lang="ts">
import ClubProf from '@/components/ClubProf.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import { refComms } from '@/models/commsData';
import type { Community } from '@/models/Communities';
import { ref } from 'vue';

const currentComm=refComms()
const selectedProfile= ref<Community | null>(null)
</script>

<template>
    <div class="min-h-screen">
        <ClubProf
        :selectedProfile="selectedProfile"/>

        <div class = "flex flex-row px-4">
            <ReviewCard 
            :rating = 5
            userName = "Anonymous User"
            reviewDate = "01/25/2016"
            comment = "Awesome!"
            />
            <ReviewCard 
            :rating = 2
            userName = "Anonymous User"
            reviewDate = "05/16/2024"
            comment = "It's just ok."
            />
        </div>

    </div>
</template>

<style scoped>

</style>