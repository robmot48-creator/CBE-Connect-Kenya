import { SectionHeader } from '@/components/section-header';

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="News & updates"
        title="Latest stories and national education updates"
        description="Share announcements, policy insight, education trends and platform updates."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['National CBC update', 'Policy alignment and implementation updates.'],
          ['STEM innovation', 'Emerging education and technology news.'],
          ['School stories', 'Success stories and teacher impact stories.']
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
