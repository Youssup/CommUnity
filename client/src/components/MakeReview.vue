<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false)

</script>

<template>
    <div class="w-64 mx-auto">
        <button class="btn" onclick="my_modal_1.showModal()">Make Review</button>
        <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
                <header class="modal-header">
                    <h1 class="text-base font-bold" id="modal-title">New Review</h1>
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </header>
                <section class="modal-box-body">
                    <label class="input flex items-center gap-2">
                        <!-- /* From Uiverse.io by PriyanshuGupta28 */  -->
                        <div class="rating">
                            <p>&#127775;&#127775;&#127775;&#127775;&#127775;</p>
                        </div>
                    </label>
                    <textarea class="textarea textarea-bordered" placeholder="Comment"></textarea>
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

/* From Uiverse.io by PriyanshuGupta28 */ 
.rating {
  display: inline-block;
}

.rating input {
  display: none;
}

.rating label {
  float: right;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}

.rating label:before {
  content: '\2605';
  font-size: 30px;
}

.rating input:checked ~ label,
.rating label:hover,
.rating label:hover ~ label {
  color: #ffce39;
  transition: color 0.3s;
}

</style>