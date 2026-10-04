import { SectionHeader } from '@/components/section-header';

export default function TeacherPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Teacher portal"
        title="Support teacher productivity and learner growth"
        description="Create resources, track competencies, generate reports, manage assessments, and strengthen classroom practice."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {[
          ['Upload Resources', 'Share notes, lesson packs, worksheets and multimedia content.'],
          ['Create Assessments', 'Build classroom assessments aligned to learning outcomes and CBC competency areas.'],
          ['Track Competencies', 'Review learner performance against expected competencies and standards.'],
          ['Generate Reports', 'Receive summary dashboards and school-wide insight for improvement planning.']
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
