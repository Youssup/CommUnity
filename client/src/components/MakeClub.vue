<script setup lang="ts">
import { ref } from 'vue'
import type { Community } from '@/models/Communities'
import { createCommunity } from '../models/Communities'

const clubName = ref('')
const description = ref('')
const meetingTime = ref('')
const contact = ref('')
const street = ref('')
const city = ref('')
const state = ref('')
const zip = ref('')

async function setCommunity() {
  const newCommunity: Community = {
    id: Date.now(),
    name: clubName.value,
    address: {
      street: street.value,
      city: city.value,
      state: state.value,
      zip: zip.value
    },
    meetingTime: meetingTime.value,
    contact: contact.value,
    description: description.value,
    rating: 0,
    reviews: [], 
    events: [] 
  }
  console.log('Created Community:', newCommunity)
  await createCommunity(newCommunity)
}
</script>

<template>
  <div class="">
    <button class="cool btn bg-violet-700 text-white" onclick="my_modal_1.showModal()">
      Make a Club
    </button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <header class="modal-header">
          <h1 class="text-base font-bold" id="modal-title">New Club</h1>
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </header>
        <section class="modal-box-body">
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="clubName" class="grow" placeholder="Club Name" />
          </label>
          <textarea
            v-model="description"
            class="textarea textarea-bordered flex items-center gap-2"
            placeholder="Description"
          ></textarea>
          <label for="timeInput" class="input input-bordered flex items-center gap-2 cursor-pointer">
            <input id="timeInput" type="time" v-model="meetingTime" class="grow" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="contact" class="grow" placeholder="Contact Information" />
          </label>

          <h4>Address</h4>
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="street" class="grow" placeholder="Street" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="city" class="grow" placeholder="City" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="state" class="grow" placeholder="State" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="zip" class="no-spinner grow" placeholder="Zip Code" />
          </label>
        </section>
        <div class="modal-action">
          <!-- Trigger the createCommunity function on submit -->
          <button @click="setCommunity" class="btn bg-green-500 text-white">Submit</button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
button {
  margin: 0.2rem;
}
.modal-box-body {
  margin: 0.5rem;
}
.input {
  margin: 0.5rem;
}
.textarea {
  margin: 0.5rem;
  min-width: 430px;
}
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.cool {
  width: 200px;
}
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
