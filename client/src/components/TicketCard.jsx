import Badge from "./Badge"
import { useTicketStore } from "../store/ticketStore"

export default function TicketCard({ ticket }) {
  const selectTicket = useTicketStore((s) => s.selectTicket)
  const updateStatus = useTicketStore((s) => s.updateStatus)
  return <article onClick={() => selectTicket(ticket)} className="cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="font-semibold text-slate-900">{ticket.customer.name}</p>
        <p className="mt-1 text-xs text-slate-500">{ticket.id}</p>
      </div>
      <Badge value={ticket.priority} />
    </div>
    <h3 className="mt-5 line-clamp-2 font-semibold text-slate-800">{ticket.subject}</h3>
    <div className="mt-6 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
      <p className="text-xs text-slate-500">{new Date(ticket.createdAt).toLocaleDateString()}</p>
      <select value={ticket.status} onClick={(event) => event.stopPropagation()} onChange={(event) => updateStatus(ticket.id, event.target.value)} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-700 outline-none">
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>
    </div>
  </article>
}
