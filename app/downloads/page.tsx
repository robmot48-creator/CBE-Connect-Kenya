import { SectionHeader } from '@/components/section-header';

export default function CertificatesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Certificates"
        title="Recognition of learner achievement"
        description="Digital certificates and badges can mark milestones, project completion, and competency attainment."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          This section can be extended with certificate templates, badge award logic, and portfolio verification for learners and teachers.
        </p>
      </div>
    </div>
  );
}
