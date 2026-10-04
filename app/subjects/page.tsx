import { SectionHeader } from '@/components/section-header';
import { learningStages } from '@/lib/navigation';

export default function LearningPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Learning portal"
        title="A complete learning journey for every learner"
        description="From early years to junior secondary, learners navigate curriculum pathways with adaptive content and guided development."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {learningStages.map((stage) => (
          <div key={stage} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">{stage}</span>
            <p className="mt-4 text-slate-600">
              Structured lessons, assessments, activity packs, and feedback for this stage of the CBC pathway.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
