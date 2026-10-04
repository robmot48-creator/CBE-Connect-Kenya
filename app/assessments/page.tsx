import { SectionHeader } from '@/components/section-header';
import { subjectAreas } from '@/lib/data';

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Subjects"
        title="Core curriculum pathways"
        description="A broad and flexible subject model designed to support both academic and practical competencies."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {subjectAreas.map((subject) => (
          <div key={subject} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{subject}</h3>
            <p className="mt-3 text-slate-600">Resources, lesson activities, and learning tasks aligned to teacher and learner needs.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
