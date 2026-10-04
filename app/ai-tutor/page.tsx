import { SectionHeader } from '@/components/section-header';

export default function AssessmentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Assessments"
        title="Competency-based assessments and evaluation"
        description="Track learner progress through formative assessments, practice tests, projects and subject mastery scores."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Formative Checks', 'Ongoing classroom and practical skill assessment.'],
          ['Summative Tests', 'Exams and project milestones mapped to standards.'],
          ['Portfolio Review', 'Progress evidence across projects, activities, and skills.']
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
