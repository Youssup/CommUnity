import data from '../data/comms.json'
import type { Event } from "./Events";
import type { Review } from "./Reviews";
import type { DataListEnvelope } from "./dataEnvelope";
import { rest } from './fetch'

export async function getAll() {
    console.log(rest('community/'))
    return rest('community/')
}

// export function getAll(): DataListEnvelope<Community> {
//     return{
//         data: data.communities.flat(),
//         total: data.total
//     }
// }

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
