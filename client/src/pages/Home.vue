<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import { setComms } from '@/models/commsData';
import { getAll, type Community } from "@/models/Communities";

// Define the search query ref
const searchQuery = ref('')

const communities = ref<Community[]>([])
watchEffect(async () => {
  communities.value = (await getAll()).communities;
  console.log(communities.value)
}); 

// Computed property to filter items based on search query
const filteredComms = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return communities.value.filter((comms) =>
  comms.name.toLowerCase().includes(query) ||comms.address.zip.includes(query)
  )
})

const props = defineProps<{
  comms: Community
}>()

const { comms } = props
const isOpen = ref(false)

</script>

<template>
  <div class="screen-h-min h-screen flex flex-col">
    <div class="dark:bg-transparent">
      <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
        <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
          <h1
            class="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-black font-black leading-10"
          >
            Find your
            <span class="text-violet-800 dark:text-violet-500">CommUnity</span>
          </h1>
          <p
            class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-900 font-normal text-center text-xl"
          >
            Find the best community for you to join and share your thoughts and ideas with others.
          </p>
        </div>
        <div class="dropdown dropdown-hover flex w-11/12 md:w-8/12 xl:w-6/12">
          <div class="flex rounded-md w-full">
            <div></div>
            <input
            v-model="searchQuery"
              type="text"
              name="q"
              class="w-full p-3 rounded-md rounded-r-none border border-2 border-indigo-900 placeholder-current dark:bg-purple-500 text-white dark:border-none"
              placeholder="CommUnity name..."
            />
            <button
              class="searching inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md"
            >

              <span>search</span>
              <svg
                class="text-gray-200 h-5 w-5 p-0 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
              >

                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
            <ul class="dropdown-content menu mt-4 rounded bg-purple-600 text-white">
         <li v-for="comms in filteredComms" :key="comms.id" class="py-1">
             <RouterLink to="/clubPro" @click="setComms(comms)"> {{ comms.name }} </RouterLink>
            </li>
           </ul>
          </div>
        </div>
        
       
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-content {
  margin-top: 3.5rem;
  padding: 0.5rem;
}
</style>
