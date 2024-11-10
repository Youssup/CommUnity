export interface Event{
    id: number
    title: string
    description: string
    date: string
    time: string
    adress: {
        street: string
        city: string
        state: string
        zip: string
    }


}