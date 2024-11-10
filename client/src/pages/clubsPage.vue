<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import ClubCard from "../components/ClubCard.vue"
import { getAll, type Community } from "@/models/Communities";
import { setComms } from "@/models/commsData";
import MakeClub from "@/components/MakeClub.vue";

const communities = ref<Community[]>([])
const props = defineProps<{
  comms: Community
}>()

const { comms } = props

watchEffect(async () => {
  communities.value = (await getAll()).communities;
  console.log(communities.value)
});


// Define the search query ref
const searchQuery = ref('')

const communit = ref<Community[]>([])
watchEffect(async () => {
  communities.value = (await getAll()).communities;
  console.log(communities.value)
});

// Computed property to filter items based on search query
const filteredComms = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return communities.value.filter((comms) =>
    comms.name.toLowerCase().includes(query) || comms.address.zip.includes(query)
  )
})
</script>

<template>
  <div class="container min-h-screen">
    <div class="grid place-items-center">
      <div class="bar flex w-11/12 md:w-8/12 xl:w-6/12">
        <div class="flex rounded-md w-full">
          <div></div>
          <input v-model="searchQuery" type="text" name="q"
            class="w-full p-3 rounded-md rounded-r-none border border-2 border-indigo-900 placeholder-current dark:bg-purple-500 text-white dark:border-none"
            placeholder="club name..." />
          <button
            class="searching inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">

            <span>search</span>
            <svg class="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966" xml:space="preserve">

              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <MakeClub class="justify-center flex mt-5"/>
    <div class="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
      <ClubCard v-for="comms in filteredComms" :key="comms.id" :comms="comms" />
    </div>
  </div>
</template>

<style scoped>
.bar {
  margin-top: 0.5rem;
}
</style>