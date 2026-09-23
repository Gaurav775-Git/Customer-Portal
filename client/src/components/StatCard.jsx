export default function StatCard({ label, value, accent }) {
  return <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
    <p className={`mt-2 text-3xl font-bold ${accent}`}>{value}</p>
  </div>
}
