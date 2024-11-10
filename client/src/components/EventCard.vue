<script setup lang="ts">
import { ref } from 'vue';

const events = ref([
  {
    id: 1,
    title: 'Event 1',
    description: 'Description for Event 1',
    date: '01/01/2023',
    time: '10:00AM',
    address: {
      street: '123 Main St',
      city: 'City',
      state: 'State',
      zip: '12345'
    }
  },
  {
    id: 2,
    title: 'Event 2',
    description: 'Description for Event 2',
    date: '02/01/2023',
    time: '11:00AM',
    address: {
      street: '456 Elm St',
      city: 'City',
      state: 'State',
      zip: '67890'
    }
  },
  {
    id: 3,
    title: 'Event 3',
    description: 'Description for Event 3',
    date: '03/01/2023',
    time: '12:00PM',
    address: {
      street: '789 Oak St',
      city: 'City',
      state: 'State',
      zip: '10112'
    }
  }
]);
</script>

<template>
  <meta charset="UTF-8">
  <!-- /* From Uiverse.io by Yaya12085 */  -->
  <div v-for="event in events" :key="event.id" class="card">
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
      {{ event.address.street }}, {{ event.address.city }}, {{ event.address.state }}, {{ event.address.zip }}
    </p>
  </div>
</template>

<style scoped>
/* From Uiverse.io by Yaya12085 */ 
.card {
  margin: 0.5rem;
  background-color: rgba(243, 244, 246, 1);
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