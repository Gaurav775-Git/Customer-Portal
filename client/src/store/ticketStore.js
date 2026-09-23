import { create } from "zustand"
import { fetchTickets } from "../api/ticketsApi"

export const useTicketStore = create((set) => ({
  tickets: [],
  loading: false,
  error: null,
  search: "",
  statusFilter: "All",
  priorityFilter: "All",
  selectedTicket: null,
  loadTickets: async () => {
    set({ loading: true, error: null })
    try {
      const data = await fetchTickets()
      set({ tickets: data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
  setSearch: (search) => set({ search }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setPriorityFilter: (priorityFilter) => set({ priorityFilter }),
  updateStatus: (id, status) => set((state) => ({
    tickets: state.tickets.map((ticket) => ticket.id === id ? { ...ticket, status } : ticket),
    selectedTicket: state.selectedTicket?.id === id ? { ...state.selectedTicket, status } : state.selectedTicket,
  })),
  selectTicket: (selectedTicket) => set({ selectedTicket }),
}))

export function selectFilteredTickets(state) {
  const search = state.search.toLowerCase()
  return state.tickets.filter((ticket) => {
    const matchesSearch = ticket.customer.name.toLowerCase().includes(search) || ticket.subject.toLowerCase().includes(search)
    const matchesStatus = state.statusFilter === "All" || ticket.status === state.statusFilter
    const matchesPriority = state.priorityFilter === "All" || ticket.priority === state.priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })
}
