<script setup lang="ts">
import ClubCard from"../components/ClubCard.vue"
import review from "../components/MakeReview.vue"
import userReview from "../components/ReviewCard.vue"
</script>

<template>
    
    <div class="container min-h-screen">
        <review />
        <ClubCard 
      :rating=5
      clubName="Eleet Coders" 
      location="Science Hall 181" 
      time="Thursdays, 6:30 PM" 
      description="Join us to practice coding challenges and develop new skills in a supportive environment!" 
    />
        <userReview
      :rating="4.5"
      userName="John Doe" 
      reviewDate="October 25, 2024" 
      comment="Great club experience! Learned so much and met amazing people!" 
    />
    </div>

</template>

<style scoped>

</style>