export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Pastel themed welcome header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Welcome to Your Portal</h1>
          <p className="text-purple-600">Track your wellness journey</p>
        </div>

        {/* Progress bar card with sample stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Your Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Weight Loss Goal</span>
                <span className="text-purple-600 font-bold">70% Complete</span>
              </div>
              <div className="w-full bg-purple-100 rounded-full h-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-4 rounded-full shadow-md" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">Sessions</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">-8 lbs</p>
                <p className="text-sm text-gray-600">Progress</p>
              </div>
              <div className="text-center p-3 bg-pink-50 rounded-lg">
                <p className="text-2xl font-bold text-pink-600">92%</p>
                <p className="text-sm text-gray-600">Adherence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Services card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
              <span>🍽️</span>
              <span>My Services</span>
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="font-semibold text-purple-900">Nutrition Coaching</p>
                <p className="text-sm text-purple-600">Active • Next: Oct 10, 2025</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900">Meal Planning</p>
                <p className="text-sm text-blue-600">Active • Weekly updates</p>
              </div>
            </div>
          </div>

          {/* Courses enrollments card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-400">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
              <span>📚</span>
              <span>My Courses</span>
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900">Weight Loss 101</p>
                <div className="mt-2">
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">Lesson 9 of 20</p>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900">Nutrition Fundamentals</p>
                <div className="mt-2">
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <p className="text-xs text-green-600 mt-1">Lesson 17 of 20</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment scheduler sample card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-400">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4 flex items-center gap-2">
            <span>📅</span>
            <span>Schedule Appointment</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="font-medium text-gray-800 mb-2">Next Available</p>
              <p className="text-lg font-bold text-pink-700">Tomorrow, 2:00 PM</p>
              <button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors w-full">
                Book Now
              </button>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="font-medium text-gray-800 mb-2">Upcoming Appointments</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <p className="font-semibold text-purple-900">Oct 10 • 3:00 PM</p>
                  <p className="text-purple-600">Follow-up Session</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-purple-900">Oct 17 • 2:30 PM</p>
                  <p className="text-purple-600">Progress Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
