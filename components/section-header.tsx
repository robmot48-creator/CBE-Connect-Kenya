import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-xl font-black text-white">CBC Connect Kenya</div>
          <p className="mt-4 text-sm text-slate-400">
            National CBC/CBE ecosystem for modern, competency-driven learning.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/learning">Learning Portal</Link></li>
            <li><Link href="/subjects">Subjects</Link></li>
            <li><Link href="/ai-tutor">AI Tutor</Link></li>
            <li><Link href="/stem">STEM Hub</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/teacher">Teacher Resources</Link></li>
            <li><Link href="/parent">Parent Portal</Link></li>
            <li><Link href="/analytics">Analytics</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Policies</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about">About CBC</Link></li>
            <li><Link href="/downloads">Downloads</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
