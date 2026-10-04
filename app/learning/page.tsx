import { SectionHeader } from '@/components/section-header';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="About CBC"
        title="Learning for Kenya's Competency-Based Curriculum"
        description="CBC Connect Kenya supports learner growth, teacher delivery, and institutional accountability through digital-first, competency-centred learning."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Competency-first', 'Skills, values, and practical application are prioritized across all grade levels.'],
          ['Inclusive learning', 'Access spans home, school, and community learning for every learner.'],
          ['Evidence-based', 'Teacher, parent, and learner data creates measurable learner outcomes.']
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
