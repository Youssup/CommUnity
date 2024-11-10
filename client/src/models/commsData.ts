import type { Community } from "./Communities";
import { ref } from "vue";

export interface CommsData{
    comms: Community
}

const currentComms =ref<CommsData[]>([])

export const refComms = () => currentComms

export function setComms(comms: Community){
    currentComms.value.push({comms})
}

export function exitComms(){
    currentComms.value.pop()
}