import { SectionHeader } from '@/components/section-header';

export default function ParentPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Parent portal"
        title="Keep parents informed, engaged and equipped"
        description="Parents can monitor learner progress, view attendance, assignments, teacher communication and performance trends."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {[
          ['Learner progress', 'Monitor strengths, growth areas and learning outcomes.'],
          ['Attendance & assignments', 'Monitor daily participation and homework completion.'],
          ['Teacher communication', 'Stay connected with timely updates and feedback.'],
          ['Recommendations', 'Receive actionable suggestions to support the learner at home.']
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
