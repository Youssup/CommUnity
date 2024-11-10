<script setup lang="ts">
import  { type Community} from '@/models/Communities'
import { setComms } from '@/models/commsData'
import { computed} from 'vue'



const props = defineProps<{
  comms: Community
}>()

const { comms } = props

const avgRating = computed(() => {
  let totalRating = 0
  let reviewCount = 0

  comms.reviews.forEach((review) => {
    totalRating += review.rating
    reviewCount++
  })

  return reviewCount > 0 ? (totalRating / reviewCount).toFixed(1) : 0
})


</script>

<template>
  <meta charset="UTF-8" />
    <!-- /* From Uiverse.io by Yaya12085 */ edited -->
  <div class="card">
    <div class="header">
      <div class="rating">{{ avgRating }}</div>
      <div class="club-info">
        <div class="stars">
          <p>
            <span v-for="star in Math.floor(Number(avgRating))" :key="star">&#11088;</span>
            <span v-if="Number(avgRating) % 1 !== 0">&#9734;</span>
          </p>
        </div>
        <RouterLink to="/clubPro">
          <a class="name" @click="setComms(comms)">{{ comms.name }}</a>
        </RouterLink>
      </div>
    </div>

    <ul class="message">
      <p>
        <b>Location: </b>{{ comms.address.street }}, {{ comms.address.city }},
        {{ comms.address.state }}, {{ comms.address.zip }}
      </p>
      <p><b>Time: </b>{{ comms.meetingTime }}</p>
      <p>{{ comms.description }}</p>
    </ul>
  </div>
</template>


<style scoped>
.card {
  margin: 0.5rem;
  background-color: rgba(243, 244, 246, 1);
  padding: 1rem;
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
  flex-shrink: 0;
  border-radius: 50%;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: larger;
  font-weight: 600;
}

.club-info {
  flex-grow: 1;
}

.stars {
  display: flex;
  gap: 0.125rem;
  color: rgba(34, 197, 94, 1);
}

.name {
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: rgba(55, 65, 81, 1);
}

.message {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
}

</style>
