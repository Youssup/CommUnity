<script setup lang="ts">
import ClubProf from '@/components/ClubProf.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import { refComms } from '@/models/commsData';
import type { Community } from '@/models/Communities';
import type { Review } from '@/models/Reviews';
import { ref } from 'vue';

const currentComm=refComms()
const selectedProfile= ref<Community | null>(null)

const selectedReviews=ref<Review | null>(null)
</script>

<template>
    <div class="min-h-screen">
        <ClubProf
        :selectedProfile="selectedProfile"/>

        <div class = "flex flex-row px-4">
            <ReviewCard 
            :selectedReviews="selectedReviews"
            />
        </div>

    </div>
</template>

<style scoped>

</style>