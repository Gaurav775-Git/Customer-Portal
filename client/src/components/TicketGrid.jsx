import TicketCard from "./TicketCard"
import { useShallow } from "zustand/react/shallow"
import { selectFilteredTickets, useTicketStore } from "../store/ticketStore"

export default function TicketGrid() {
  const list = useTicketStore(useShallow(selectFilteredTickets))
  if (!list.length) return <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-500">No tickets match your filters.</div>
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{list.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}</div>
}
