<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <div class="w-64 mx-auto">
    <button class="cool btn bg-violet-700 text-white" onclick="my_modal_2.showModal()">
      Make a review
    </button>
    <dialog id="my_modal_2" class="modal">
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
              <input value="5" name="rating" id="star5" type="radio" />
              <label for="star5"></label>
              <input value="4" name="rating" id="star4" type="radio" />
              <label for="star4"></label>
              <input value="3" name="rating" id="star3" type="radio" />
              <label for="star3"></label>
              <input value="2" name="rating" id="star2" type="radio" />
              <label for="star2"></label>
              <input value="1" name="rating" id="star1" type="radio" />
              <label for="star1"></label>
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
button {
  margin: 0.5rem;
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

.cool {
  width: 200px;
}
</style>
