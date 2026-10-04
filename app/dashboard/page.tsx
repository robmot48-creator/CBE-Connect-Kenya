export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-lg px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black text-slate-900">Create account</h1>
        <p className="mt-2 text-slate-600">Join the CBC Connect Kenya learning ecosystem.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" type="text" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
            <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500">
              <option>Student</option>
              <option>Teacher</option>
              <option>Parent</option>
              <option>Admin</option>
              <option>County Trainer</option>
            </select>
          </div>
          <button type="submit" className="w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-500">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
