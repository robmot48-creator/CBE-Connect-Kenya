import { SectionHeader } from '@/components/section-header';
import { dashboardHighlights } from '@/lib/data';

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Admin dashboard"
        title="National oversight and school performance visibility"
        description="Admin users and education leaders can review institutional performance, quality trends and strategic indicators."
      />

      <div className="grid gap-6 md:grid-cols-4">
        {dashboardHighlights.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">{item.label}</div>
            <div className="mt-3 text-3xl font-black text-slate-900">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
