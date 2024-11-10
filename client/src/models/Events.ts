export interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
}
