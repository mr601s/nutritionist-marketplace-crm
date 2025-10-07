'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [showOverlay, setShowOverlay] = useState(true);
  const router = useRouter();

  const handleCustomerSelection = () => {
    setShowOverlay(false);
    router.push('/login');
  };

  const handleNutritionistSelection = () => {
    setShowOverlay(false);
    router.push('/login');
  };

  if (showOverlay) {
    return (
      <div className="fixed inset-0 z-50 flex">
        {/* Customer Side - Left Half */}
        <div className="w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-12 transition-all hover:scale-[1.02] hover:shadow-2xl">
          <div className="text-center max-w-md">
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-bounce">🛒</div>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                I am a customer
              </h1>
              <p className="text-lg text-blue-700 mb-8">
                Book services, manage your nutrition plan, and track your progress
              </p>
            </div>
            <button
              onClick={handleCustomerSelection}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enter Customer Portal
            </button>
          </div>
        </div>
        {/* Admin/Nutritionist Side - Right Half */}
        <div className="w-1/2 bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-12 transition-all hover:scale-[1.02] hover:shadow-2xl">
          <div className="text-center max-w-md">
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-bounce">⚕️</div>
              <h1 className="text-4xl font-bold text-green-900 mb-4">
                I am a nutritionist
              </h1>
              <p className="text-lg text-green-700 mb-8">
                Manage clients, create plans, and oversee your practice
              </p>
            </div>
            <button
              onClick={handleNutritionistSelection}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enter Admin Portal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome</h1>
      </div>
    </div>
  );
}
