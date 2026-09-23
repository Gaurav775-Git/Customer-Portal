import { tickets } from "../data/tickets"

export function fetchTickets() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tickets), 600)
  })
}
