<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false)
</script>

<template>
    <div class="w-64 mx-auto">
        <button class="btn" onclick="my_modal_1.showModal()">Make Event</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <header class="modal-header">
        <h1 class="text-base font-bold" id="modal-title">New Event</h1>
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    </header>
    <section class="modal-box-body">
        <label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Title" />
</label>
    <textarea class="textarea textarea-bordered flex items-centered gap-2" placeholder="Description"></textarea>

    <label class="input input-bordered flex flex-row-reverse items-center gap-2 cursor-pointer">
  <input type="date" class="grow bg-transparent focus:outline-none" placeholder="MM/DD/YYYY" />
</label>

<label for="timeInput" class="input input-bordered flex items-center gap-2 cursor-pointer">
  <input id="timeInput" type="time" class="grow" value="time" />
</label>

<h4>Address</h4>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Street" />
</label>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="City" />
</label>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="State" />
</label>
<label class="input input-bordered flex items-center gap-2">
  <input type="string" class="no-spinner grow" placeholder="Zip Code" />
</label>

    </section>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn bg-green-500 text-white">Submit</button>
      </form>
    </div>
  </div>
</dialog>
</div>
</template>

<style scoped>
button{
    margin: 0.5rem;
}
.modal-box-body{
    margin: 0.5rem;
}
.input{
    margin: 0.5rem;
}
.textarea{
    margin: 0.5rem;
    min-width: 430px;
}
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>