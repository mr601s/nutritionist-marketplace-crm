export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Dark themed header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Nutritionist Dashboard</h1>
          <p className="text-gray-400">Admin Control Panel</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client table */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Client Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-3 text-gray-300 font-medium">Client Name</th>
                    <th className="pb-3 text-gray-300 font-medium">Status</th>
                    <th className="pb-3 text-gray-300 font-medium">Last Visit</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  <tr className="border-b border-gray-700">
                    <td className="py-3">Sarah Johnson</td>
                    <td className="py-3"><span className="bg-green-600 px-2 py-1 rounded text-sm">Active</span></td>
                    <td className="py-3">Oct 3, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">Michael Chen</td>
                    <td className="py-3"><span className="bg-yellow-600 px-2 py-1 rounded text-sm">Pending</span></td>
                    <td className="py-3">Oct 1, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3">Emily Rodriguez</td>
                    <td className="py-3"><span className="bg-green-600 px-2 py-1 rounded text-sm">Active</span></td>
                    <td className="py-3">Sept 28, 2025</td>
                  </tr>
                  <tr>
                    <td className="py-3">David Thompson</td>
                    <td className="py-3"><span className="bg-blue-600 px-2 py-1 rounded text-sm">New</span></td>
                    <td className="py-3">Oct 6, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Progress summary card */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Progress Summary</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Total Clients</span>
                  <span className="text-white font-semibold">47</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Active Programs</span>
                  <span className="text-white font-semibold">23</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '49%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-white font-semibold">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Note editor card */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Quick Notes</h2>
            <textarea
              className="w-full h-40 bg-gray-700 text-white rounded p-3 border border-gray-600 focus:border-blue-500 focus:outline-none"
              placeholder="Add client notes, reminders, or observations..."
            />
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Save Note
            </button>
          </div>
          {/* Editable course catalogue card */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Course Catalogue</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded">
                <div>
                  <p className="text-white font-medium">Weight Loss 101</p>
                  <p className="text-gray-400 text-sm">12 enrolled</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">Edit</button>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded">
                <div>
                  <p className="text-white font-medium">Meal Planning Basics</p>
                  <p className="text-gray-400 text-sm">8 enrolled</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">Edit</button>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded">
                <div>
                  <p className="text-white font-medium">Nutrition Fundamentals</p>
                  <p className="text-gray-400 text-sm">15 enrolled</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">Edit</button>
              </div>
              <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                + Add New Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
