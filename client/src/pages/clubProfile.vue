<script setup lang="ts">
import ClubProf from '@/components/ClubProf.vue';
import ReviewCard from '@/components/ReviewCard.vue';
</script>

<template>
    <div class="min-h-screen">
        <ClubProf
        :rating=5
        name="Eleet Coders"
        location="123 Main St, City, NY 12345"
        meetingTime="Mondays 2-3 PM"
        contact="123456789"
        description="Join us we're the most amazing club ever!!!"
        />

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