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
    <textarea class="textarea textarea-bordered" placeholder="Description"></textarea>


<label for="timeInput" class="input input-bordered flex items-center gap-2 cursor-pointer">
  <input id="timeInput" type="time" class="grow" value="time" />
</label>
    </section>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->

        <button class="btn">Close</button>
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
</style>