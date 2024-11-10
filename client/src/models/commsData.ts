import type { Community } from "./Communities";
import { ref } from "vue";

export interface CommsData {
    comms: Community;
}

const currentComms = ref<CommsData[]>([]);

export const refComms = () => currentComms;

export function setComms(comms: Community) {
    currentComms.value.push({ comms });
}

export function exitComms() {
    currentComms.value.pop();
}

export function calculateAverageRating(): number {
    let totalRating = 0;
    let reviewCount = 0;

    currentComms.value.forEach(commData => {
        commData.comms.reviews.forEach(review => {
            totalRating += review.rating;
            reviewCount++;
        });
    });

    return reviewCount > 0 ? parseFloat((totalRating / reviewCount).toFixed(2)) : 0;
}