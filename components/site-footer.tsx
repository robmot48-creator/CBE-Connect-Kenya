import Link from 'next/link';
import { primaryNavigation } from '@/lib/navigation';

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-lg font-black text-white">
            C
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">CBC Connect</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Kenya</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Login
          </Link>
          <Link href="/register" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
