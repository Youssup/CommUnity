import { rest } from './fetch'

export interface Review {
  id: number
  comment: string
  date: string
  rating: number
}

export async function createReview(newReview: Review) {
  const savedReview = await rest('review/', newReview, 'POST')
  console.log('Created Review:', savedReview)
  return savedReview
}