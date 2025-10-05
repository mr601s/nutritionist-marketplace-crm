import Link from 'next/link';

export default function CustomerLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Customer Portal</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Welcome to Your Nutrition Journey! 🎉
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              This is your personalized customer portal where you can manage your nutrition plans, 
              book appointments, and track your wellness progress.
            </p>
            <p className="text-gray-600">
              Our team of expert nutritionists is here to support you every step of the way.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">📅 Book Appointment</h3>
              <p className="text-gray-600 mb-4">
                Schedule a consultation with one of our nutritionists.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">📊 My Progress</h3>
              <p className="text-gray-600 mb-4">
                View your nutrition plans and track your achievements.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
