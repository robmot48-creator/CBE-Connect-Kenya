import { SectionHeader } from '@/components/section-header';

export default function StemPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="STEM & coding"
        title="Innovation and maker learning"
        description="Explore hands-on experiences in Coding, Robotics, Artificial Intelligence, IoT, Scratch, Raspberry Pi and project-based STEM learning."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          'Scratch',
          'Micro:bit',
          'Python',
          'Robotics',
          'AI',
          'Web Development',
          'IoT',
          'Raspberry Pi'
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{item}</h3>
            <p className="mt-3 text-slate-600">Project-based activities that encourage innovation, creativity and inquiry.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
