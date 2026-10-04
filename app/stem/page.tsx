import { SectionHeader } from '@/components/section-header';

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Digital library"
        title="Resource-rich learning centre"
        description="Digital books, teacher packs, revision guides, and access to curated learning resources for all grade bands."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['E-books', 'Digital reading collections for literacy and content mastery.'],
          ['Teacher Packs', 'Lesson plans, assessments, coding tasks and guidance materials.'],
          ['Open Access', 'Downloadable and shareable resources for school and home learning.']
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
