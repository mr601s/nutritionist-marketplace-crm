export default function CustomerDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Customer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Services</h2>
            <p className="text-gray-600">Browse available nutrition services</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Courses</h2>
            <p className="text-gray-600">Explore educational courses and programs</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Bookings</h2>
            <p className="text-gray-600">Manage your appointments and bookings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
