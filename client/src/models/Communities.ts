import type { Event } from "./Events";
import type { Review } from "./Reviews";
import { ref } from 'vue';
//import type { DataEnvelope } from "./dataEnvelope";

export interface Community{
    id: number
    name: string
    address: {
        street: string
        city: string
        state: string
        zip: string
    }
    meetingTime: string
    contact: string
    description: string
    rating: number

    reviews: Review[]
    events: Event[]
}

    const clubs = ref([
  {
    id: 1,
    name: 'Club 1',
    address: {
      street: '123 Main St',
      city: 'City',
      state: 'State',
      zip: '12345'
    },
    meetingTime: 'Monday 1-2 PM',
    contact: '123456789',
    description: 'awesome club',
    rating: '5',
  },
  {
    id: 2,
    name: 'Club 2',
    address: {
      street: '456 Main St',
      city: 'City',
      state: 'State',
      zip: '12345'
    },
    meetingTime: 'Tuesday 1-2 PM',
    contact: '123456789',
    description: 'awesome club',
    rating: '3',
  },
  {
    id: 3,
    name: 'Club 3',
    address: {
      street: '789 Main St',
      city: 'City',
      state: 'State',
      zip: '98765'
    },
    meetingTime: 'Friday 7-8 AM',
    contact: '987654321',
    description: 'awesome club',
    rating: '2.5',
  },
])

    
