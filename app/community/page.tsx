import { SectionHeader } from '@/components/section-header';

export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Downloads"
        title="Access lesson materials and learning assets"
        description="Download digital tools, teacher guides, Parental resources, and classroom materials designed for the CBC environment."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Lesson Plans', 'Printable classroom plans by grade and subject.'],
          ['Printable Activities', 'Teacher and learner task sheets for practice.'],
          ['Toolkits', 'STEM and project-based activity packages.']
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
