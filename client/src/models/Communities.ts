import data from '../data/comms.json'
import type { Event } from "./Events";
import type { Review } from "./Reviews";
import type { DataListEnvelope } from "./dataEnvelope";

export function getAll(): DataListEnvelope<Community> {
    return{
        data: data.clubs.flat(),
        total: data.total
    }
}

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