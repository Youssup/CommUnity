<script setup lang="ts">
import MakeEvent from '@/components/MakeEvent.vue';
import EventCard from '@/components/EventCard.vue';
</script>

<template>
    <div class="min-h-screen">
        <MakeEvent/>
        <div class="self">
            <EventCard />
        </div>
    </div>
</template>

<style scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>