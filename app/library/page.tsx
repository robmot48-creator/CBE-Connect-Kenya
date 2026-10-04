import { SectionHeader } from '@/components/section-header';
import { aiTutorFeatures } from '@/lib/data';

export default function AiTutorPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="AI Tutor"
        title="Personalized guidance for every learner"
        description="AI-powered support helps learners understand concepts, revise topics, generate questions, and reflect on learning goals."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold">Learner support in English and Kiswahili</h3>
          <p className="mt-4 max-w-xl text-blue-50">
            The tutor can explain concepts, encourage deeper thinking, support revision planning, and generate practice questions aligned to CBC competencies.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">AI Tutor capabilities</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            {aiTutorFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
