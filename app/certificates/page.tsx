import { SectionHeader } from '@/components/section-header';

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Analytics"
        title="County, school and learner performance insights"
        description="A data-driven system for monitoring trends in achievement, time-on-task, teacher engagement and learning outcomes."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['County performance', 'Regional and county-level achievement patterns.'],
          ['School performance', 'Institution-level trends across grades and subjects.'],
          ['Teacher activity', 'Lesson delivery, support frequency and engagement.'],
          ['Subject trends', 'Which curricula areas require more intervention or support.'],
          ['Assessment outcomes', 'Mastery levels and learner performance distribution.'],
          ['Learning time', 'Participation, engagement, and completion metrics.']
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
