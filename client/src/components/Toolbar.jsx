import { useTicketStore } from "../store/ticketStore"

export default function Toolbar() {
  const search = useTicketStore((s) => s.search)
  const statusFilter = useTicketStore((s) => s.statusFilter)
  const priorityFilter = useTicketStore((s) => s.priorityFilter)
  const setSearch = useTicketStore((s) => s.setSearch)
  const setStatusFilter = useTicketStore((s) => s.setStatusFilter)
  const setPriorityFilter = useTicketStore((s) => s.setPriorityFilter)

  return <div className="flex flex-col gap-3 md:flex-row">
    <input className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by customer or subject" />
    <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
      <option>All</option>
      <option>Open</option>
      <option>In Progress</option>
      <option>Resolved</option>
    </select>
    <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500" value={priorityFilter} onChange={(event) => setPriorityFilter(event.target.value)}>
      <option>All</option>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>
  </div>
}
