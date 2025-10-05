import Link from 'next/link';

export default function AdminLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Admin Portal</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Welcome to Your Admin Dashboard! ⚖️
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              This is your administrative portal where you can manage clients, create nutrition plans, 
              and oversee your nutritionist practice.
            </p>
            <p className="text-gray-600">
              Access powerful tools to help your clients achieve their wellness goals.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">👥 Manage Clients</h3>
              <p className="text-gray-600 mb-4">
                View and manage your client roster and their progress.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">📋 Create Plans</h3>
              <p className="text-gray-600 mb-4">
                Design custom nutrition plans for your clients.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block text-green-600 hover:text-green-800 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
