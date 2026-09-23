export function Spinner() {
  return <div className="flex justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" /></div>
}

export function ErrorState({ message, onRetry }) {
  return <div className="rounded-xl border border-red-100 bg-red-50 py-12 text-center"><p className="text-sm text-red-700">{message}</p><button type="button" onClick={onRetry} className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">Retry</button></div>
}
