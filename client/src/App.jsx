import { useEffect } from "react"
import DetailsPanel from "./components/DetailsPanel"
import { ErrorState, Spinner } from "./components/States"
import StatsRow from "./components/StatsRow"
import TicketGrid from "./components/TicketGrid"
import Toolbar from "./components/Toolbar"
import { useTicketStore } from "./store/ticketStore"

export default function App() {
  const loading = useTicketStore((s) => s.loading)
  const error = useTicketStore((s) => s.error)
  const loadTickets = useTicketStore((s) => s.loadTickets)

  useEffect(() => { loadTickets() }, [loadTickets])

  return <div className="min-h-screen text-slate-900">
    <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Support center</p><h1 className="mt-1 text-2xl font-bold tracking-tight">Ticket dashboard</h1></div><div className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 sm:block">Operations view</div></div></header>
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-6"><StatsRow /><Toolbar />{loading ? <Spinner /> : error ? <ErrorState message={error} onRetry={loadTickets} /> : <TicketGrid />}</main>
    <DetailsPanel />
  </div>
}
