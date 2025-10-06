export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Client Intake</h2>
            <p className="text-gray-600">Manage new client onboarding and intake forms</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Notes</h2>
            <p className="text-gray-600">View and update patient consultation notes</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Progress Tracker</h2>
            <p className="text-gray-600">Track client progress and health metrics</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Management</h2>
            <p className="text-gray-600">Create and manage educational courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
