<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { ref, watchEffect } from "vue";
import { getAll, type Community } from "@/models/Communities";

const communities = ref<Community[]>([]);

watchEffect(async () => {
  communities.value = (await getAll()).communities;
  console.log(communities.value);
});
</script>

<template>
  <div class="min-h-screen">
    <div class="shelf">
      <div v-for="community in communities" :key="community.id" class="community-events">
        <h2 class="community-title">{{ community.name }} Events</h2>
        <EventCard :events="community.events" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.community-events {
  width: 100%;
  max-width: 1200px;
}

.community-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: black;
}
</style>
