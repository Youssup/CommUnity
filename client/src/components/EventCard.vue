<script setup lang="ts">
import { Event } from '../models/Event'
import { defineProps } from 'vue'

const props = defineProps<{
  events: Event[]
}>()
</script>

<template>
  <meta charset="UTF-8" />
  <div class="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
    <div v-for="event in props.events" :key="event.id" class="card">
      <div class="header">
        <div>
          <p class="title">{{ event.title }}</p>
          <div>
            <p class="date">{{ event.date }}</p>
            <p class="time">{{ event.time }}</p>
          </div>
        </div>
      </div>

      <p class="description">
        {{ event.description }}
      </p>
      <p class="address">
        {{ event.address.street }}, {{ event.address.city }}, {{ event.address.state }},
        {{ event.address.zip }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* From Uiverse.io by Yaya12085 */
.card {
  background-color: rgba(243, 244, 246, 1);
  margin-top: 0.5rem;
  padding: 2rem;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
}

.header {
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  gap: 1rem;
}

.title {
  margin-top: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, 1);
}

.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
}
</style>
