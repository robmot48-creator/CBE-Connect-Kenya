import { SectionHeader } from '@/components/section-header';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Get support from the CBC Connect team"
        description="Reach out for support, partnership opportunities, school onboarding, or platform guidance."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">Email: support@cbcconnectkenya.org</p>
        <p className="mt-2 text-slate-600">Phone: +254 700 000 000</p>
      </div>
    </div>
  );
}
