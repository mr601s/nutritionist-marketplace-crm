export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Deep night themed header with neon accents */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Nutritionist Dashboard</h1>
          <p className="text-cyan-200">Admin Control Panel</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client table */}
          <div className="lg:col-span-2 bg-slate-950 border border-cyan-900 rounded-lg shadow-2xl shadow-cyan-900/20 p-6">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Client Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-cyan-900">
                    <th className="pb-3 text-cyan-400 font-medium">Client Name</th>
                    <th className="pb-3 text-cyan-400 font-medium">Status</th>
                    <th className="pb-3 text-cyan-400 font-medium">Last Visit</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Sarah Johnson</td>
                    <td className="py-3"><span className="bg-emerald-500 text-black px-2 py-1 rounded text-sm font-semibold">Active</span></td>
                    <td className="py-3">Oct 3, 2025</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Michael Chen</td>
                    <td className="py-3"><span className="bg-amber-400 text-black px-2 py-1 rounded text-sm font-semibold">Pending</span></td>
                    <td className="py-3">Oct 1, 2025</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3">Emily Rodriguez</td>
                    <td className="py-3"><span className="bg-emerald-500 text-black px-2 py-1 rounded text-sm font-semibold">Active</span></td>
                    <td className="py-3">Sept 28, 2025</td>
                  </tr>
                  <tr>
                    <td className="py-3">David Thompson</td>
                    <td className="py-3"><span className="bg-cyan-400 text-black px-2 py-1 rounded text-sm font-semibold">New</span></td>
                    <td className="py-3">Oct 6, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Progress summary card */}
          <div className="bg-slate-950 border border-cyan-900 rounded-lg shadow-2xl shadow-cyan-900/20 p-6">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Progress Summary</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Total Clients</span>
                  <span className="text-cyan-400 font-bold">47</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full shadow-lg shadow-cyan-500/50" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Active Programs</span>
                  <span className="text-cyan-400 font-bold">23</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full shadow-lg shadow-emerald-500/50" style={{width: '50%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Success Rate</span>
                  <span className="text-cyan-400 font-bold">92%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full shadow-lg shadow-purple-500/50" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Note editor card */}
          <div className="bg-slate-950 border border-cyan-900 rounded-lg shadow-2xl shadow-cyan-900/20 p-6">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Quick Notes</h2>
            <textarea
              className="w-full h-40 bg-slate-900 text-slate-100 rounded p-3 border border-cyan-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              placeholder="Add client notes, reminders, or observations..."
            />
            <button className="mt-3 bg-cyan-600 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded transition-colors shadow-lg shadow-cyan-600/30">
              Save Note
            </button>
          </div>
          {/* Editable course catalogue card */}
          <div className="bg-slate-950 border border-cyan-900 rounded-lg shadow-2xl shadow-cyan-900/20 p-6">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Course Catalogue</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded hover:border-cyan-700 transition-colors">
                <div>
                  <p className="text-slate-100 font-medium">Weight Loss 101</p>
                  <p className="text-slate-400 text-sm">12 enrolled</p>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">Edit</button>
              </div>
              <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded hover:border-cyan-700 transition-colors">
                <div>
                  <p className="text-slate-100 font-medium">Meal Planning Basics</p>
                  <p className="text-slate-400 text-sm">8 enrolled</p>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">Edit</button>
              </div>
              <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded hover:border-cyan-700 transition-colors">
                <div>
                  <p className="text-slate-100 font-medium">Nutrition Fundamentals</p>
                  <p className="text-slate-400 text-sm">15 enrolled</p>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">Edit</button>
              </div>
              <button className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-black font-semibold px-4 py-2 rounded transition-colors shadow-lg shadow-emerald-600/30">
                + Add New Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
