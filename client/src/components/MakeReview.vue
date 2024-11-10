<script setup lang="ts">
import { ref } from 'vue'
import { createReview } from '../models/Reviews'

const rating = ref<number | null>(null)
const comment = ref<string>('')

function setReview() {
  if (!rating.value || !comment.value.trim()) {
    alert('Please fill in both rating and comment')
    return
  }

  const newReview = {
    id: Date.now(),
    comment: comment.value,
    date: new Date().toISOString(),
    rating: rating.value,
  }

  console.log('Created Review:', newReview)
  createReview(newReview)
  const myModal = document.getElementById('my_modal_2') as HTMLDialogElement
  if (myModal) {
    myModal.close()
  }
}
</script>

<template>
  <div class="w-64 mx-auto">
    <button class="cool btn bg-violet-700 text-white" onclick="my_modal_2.showModal()">Make a review</button>
    <dialog id="my_modal_2" ref="my_modal_2" class="modal">
      <div class="modal-box">
        <header class="modal-header">
          <h1 class="text-base font-bold" id="modal-title">New Review</h1>
          <button @click="$refs.my_modal_2.close()"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </header>
        <section class="modal-box-body">
          <div class="rating">
            <input v-model="rating" value="5" name="rating" id="star5" type="radio" />
            <label for="star5"></label>
            <input v-model="rating" value="4" name="rating" id="star4" type="radio" />
            <label for="star4"></label>
            <input v-model="rating" value="3" name="rating" id="star3" type="radio" />
            <label for="star3"></label>
            <input v-model="rating" value="2" name="rating" id="star2" type="radio" />
            <label for="star2"></label>
            <input v-model="rating" value="1" name="rating" id="star1" type="radio" />
            <label for="star1"></label>
          </div>
          <textarea v-model="comment" class="textarea textarea-bordered" placeholder="Comment"></textarea>
        </section>
        <div class="modal-action">
          <button @click="setReview" class="btn bg-green-500 text-white">Submit</button>
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

/* Rating stars */
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

.rating input:checked~label,
.rating label:hover,
.rating label:hover~label {
  color: #ffce39;
  transition: color 0.3s;
}

.cool {
  width: 200px;
}
</style>
