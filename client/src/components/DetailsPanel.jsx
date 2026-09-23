import Badge from "./Badge"
import { useTicketStore } from "../store/ticketStore"

export default function DetailsPanel() {
  const ticket = useTicketStore((s) => s.selectedTicket)
  const selectTicket = useTicketStore((s) => s.selectTicket)
  return <>
    <div onClick={() => selectTicket(null)} className={`fixed inset-0 z-20 bg-slate-950/40 transition-opacity ${ticket ? "opacity-100" : "pointer-events-none opacity-0"}`} />
    <aside className={`fixed right-0 top-0 z-30 h-full w-full overflow-y-auto bg-white shadow-2xl transition-transform duration-300 md:w-[480px] ${ticket ? "translate-x-0" : "translate-x-full"}`}>
      {ticket && <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{ticket.id}</p><h2 className="mt-2 text-2xl font-bold text-slate-900">{ticket.subject}</h2></div>
          <button type="button" onClick={() => selectTicket(null)} aria-label="Close details" className="text-2xl leading-none text-slate-400 transition hover:text-slate-700">&times;</button>
        </div>
        <div className="mt-6 border-b border-slate-200 pb-6"><p className="font-semibold text-slate-800">{ticket.customer.name}</p><p className="mt-1 text-sm text-slate-500">{ticket.customer.email}</p><p className="mt-3 text-xs text-slate-400">Created {new Date(ticket.createdAt).toLocaleString()}</p><div className="mt-4 flex gap-2"><Badge value={ticket.priority} /><Badge value={ticket.status} /></div></div>
        <p className="py-6 text-sm leading-6 text-slate-600">{ticket.description}</p>
        <div className="border-t border-slate-200 pt-6"><h3 className="text-sm font-bold text-slate-900">Conversation</h3>{ticket.messages.length ? <div className="mt-4 space-y-4">{ticket.messages.map((message, index) => <div key={`${message.time}-${index}`} className={message.sender === "agent" ? "ml-6" : ""}><div className={`rounded-xl p-4 text-sm leading-6 ${message.sender === "agent" ? "bg-blue-50 text-blue-950" : "bg-slate-100 text-slate-700"}`}><p>{message.text}</p><p className="mt-2 text-xs opacity-60">{new Date(message.time).toLocaleString()}</p></div></div>)}</div> : <p className="mt-4 text-sm text-slate-400">No messages in this thread.</p>}</div>
      </div>}
    </aside>
  </>
}
