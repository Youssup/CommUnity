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
    <EventCard :events="communities.flatMap(community => community.events)" />
  </div>
</template>

<style scoped>
/* .shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
} */

.community-events {
  width: 100%;
  max-width: 1200px;
}
</style>
