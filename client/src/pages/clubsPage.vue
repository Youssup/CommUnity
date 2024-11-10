<script setup lang="ts">
import { ref, watchEffect} from "vue";
import ClubCard from "../components/ClubCard.vue"
import { getAll, type Community } from "@/models/Communities";
console.log("Hello")

const communities = ref<Community[]>([])
watchEffect(async () => {
  communities.value = (await getAll()).communities;
  console.log(communities.value)
}); 

// await getAll().then(response => {
//   communities.value = response;
//   console.log(communities.value)
// });
</script>

<template>
  <div class="container min-h-screen">
    <div class="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
      <ClubCard v-for="community in communities" :key="community.id" :comms="community" />
    </div>
  </div>
</template>

<style scoped></style>