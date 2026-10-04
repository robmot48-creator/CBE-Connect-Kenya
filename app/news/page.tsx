import { SectionHeader } from '@/components/section-header';

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Community forum"
        title="Conversations, collaboration and shared learning"
        description="Create connections across schools, educators, parents and education stakeholders."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          Community features may include discussion threads, school groups, teacher peer support and knowledge-sharing activities.
        </p>
      </div>
    </div>
  );
}
