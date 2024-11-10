<script setup lang="ts">
import { refComms } from '@/models/commsData'
const currentComm = refComms()
</script>

<template>
  <meta charset="UTF-8" />
  <div
    class="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4"
    v-for="comm in currentComm"
    :key="comm.comms.id"
  >
    <!-- /* From Uiverse.io by Yaya12085 */ edited -->
    <div class="review-card shadow-lg" v-for="review in comm.comms.reviews" :key="review.id">
      <div class="header">
        <div class="rating">{{ review.rating }}</div>
        <div>
          <div class="stars">
            <p>
              <span v-for="star in Math.floor(review.rating)" :key="star">&#11088;</span>
              <span v-if="review.rating % 1 !== 0">&#9734;</span>
            </p>
          </div>
          <p class="user-name">Anonymous</p>
          <p class="review-date">{{ review.date }}</p>
        </div>
      </div>
      <div class="comment">
        <p>"{{ review.comment }}"</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  margin: 0.5rem;
  background-color: rgba(243, 244, 246, 1);
  padding: 2rem;
  max-width: 320px;
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header .rating {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: larger;
  font-weight: 600;
}

.stars {
  display: flex;
  justify-content: center;
  gap: 0.125rem;
  color: rgba(34, 197, 94, 1);
}

.user-name,
.review-date {
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(55, 65, 81, 1);
}

.comment {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(107, 114, 128, 1);
}
</style>
