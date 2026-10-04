export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">
                Kenya CBC/CBE Learning Ecosystem
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                CBC Connect Kenya
              </h1>
              <p className="mt-6 max-w-xl text-lg text-blue-100 md:text-xl">
                A national digital platform for learners, teachers, parents, school leaders,
                county trainers, and Ministry of Education stakeholders aligned to Kenya’s
                Competency-Based Curriculum.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/learning"
                  className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
                >
                  Start Learning
                </a>
                <a
                  href="/teacher"
                  className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300"
                >
                  Teacher Resources
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
                {[
                  ["Grade 1-6", "Foundational learning"],
                  ["Grade 7-9", "Competency progression"],
                  ["AI Tutor", "Personalized guidance"]
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-base font-bold text-white">{title}</div>
                    <div className="mt-2 text-xs text-blue-100">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-slate-950/20 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-sm">
              <div className="rounded-2xl bg-white p-6 text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">National Learning Snapshot</p>
                    <h2 className="text-3xl font-bold">89.4%</h2>
                  </div>
                  <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    +12.8%
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    ["Learner engagement", "84%"],
                    ["Assessment completion", "76%"],
                    ["Teacher adoption", "91%"],
                    ["STEM project activity", "67%"]
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
                        <span>{label}</span>
                        <span className="font-semibold text-slate-800">{value}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Platform features</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Built for every stakeholder in the CBC ecosystem
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Learners', text: 'Personalized pathways, competency tracking, projects and revision support.', color: 'blue' },
            { title: 'Teachers', text: 'Assessment authoring, lesson planning, reporting and resource sharing.', color: 'green' },
            { title: 'Parents', text: 'Progress monitoring, attendance, assignments and guidance.', color: 'amber' },
            { title: 'School Leaders', text: 'Analytics, quality assurance and county performance insights.', color: 'purple' }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`mb-4 inline-flex rounded-xl bg-${item.color}-100 px-3 py-2 text-${item.color}-700`}>
                <span className="text-lg font-bold">{item.title.slice(0, 1)}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">CBC curriculum coverage</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Aligned to Kenya’s learning outcomes</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'PP1 & PP2 Early years',
                'Grades 1–6 Foundation learning',
                'Grades 7–9 Junior secondary',
                'STEM & coding pathways',
                'Digital literacy and communication',
                'Competency assessments and portfolio tracking'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-900">
                    ✓
                  </span>
                  <p className="mt-3 font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-white shadow-xl shadow-blue-950/20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">National digital transformation</p>
              <h2 className="mt-3 text-3xl font-bold">Ready for the next generation of CBC/CBE</h2>
            </div>
            <a href="/register" className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg shadow-slate-900/10 transition hover:bg-slate-100">
              Create Account
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
