import type { Event } from "./Events";
import type { Review } from "./Reviews";
//import type { DataEnvelope } from "./dataEnvelope";

export interface Community{
    id: number
    name: string
    address: {
        street: string
        city: string
        state: string
        zip: number
    }
    meetingTime: string
    Contact: string
    Description: string
    Rating: number

    reviews: Review[]
    events: Event[]
}