import StatCard from "./StatCard"
import { useTicketStore } from "../store/ticketStore"

export default function StatsRow() {
  const tickets = useTicketStore((s) => s.tickets)
  const stats = [
    ["Total", tickets.length, "text-slate-900"],
    ["Open", tickets.filter((t) => t.status === "Open").length, "text-blue-600"],
    ["In Progress", tickets.filter((t) => t.status === "In Progress").length, "text-amber-600"],
    ["Resolved", tickets.filter((t) => t.status === "Resolved").length, "text-emerald-600"],
  ]
  return <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">{stats.map(([label, value, accent]) => <StatCard key={label} label={label} value={value} accent={accent} />)}</div>
}
