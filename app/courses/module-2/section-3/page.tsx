export default function Section23Page() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        🥑 2.3 Setting Fat Targets
      </h1>
      
      <p className="mb-6 text-gray-700">
        Next up: fat intake. Despite its reputation, dietary fat is essential. It helps:
      </p>
      
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Absorb fat-soluble vitamins</li>
        <li>Support hormone production</li>
        <li>Provide long-lasting energy</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">
        📏 How Much Fat Do You Need?
      </h2>
      
      <p className="mb-4 text-gray-700">
        A good starting point is <strong>0.45 grams of fat per pound of body weight</strong>.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-mono text-gray-800">
          Example: 200 lbs × 0.45 = 90 grams of fat/day
        </p>
        <p className="font-mono text-gray-800 mt-2">
          That gives you 810 calories from fat (since fat has 9 calories per gram).
        </p>
      </div>
      
      <p className="text-gray-700">
        You can adjust this slightly based on personal preference, but fat should never drop below 20% of your total intake. That{"'"s the minimum your body needs to function properly.
      </p>
    </main>
  );
}
